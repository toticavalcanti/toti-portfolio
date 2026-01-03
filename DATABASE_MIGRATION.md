# Database Schema Update for WhatsApp Agent

## Campo Adicionado: `last_message_id`

Para suportar idempotência no webhook, foi adicionado o campo `last_message_id` à tabela `leads`.

### SQL para Adicionar Coluna

Execute no Neon Console:

```sql
ALTER TABLE leads 
ADD COLUMN IF NOT EXISTS last_message_id TEXT;
```

### Descrição

- **Tipo**: `TEXT`
- **Nullable**: `true`
- **Propósito**: Armazenar o último `messageId` processado do webhook Z-API
- **Uso**: Prevenir processamento duplicado se o webhook for reenviado

### Quando Executar

Antes de fazer deploy das mudanças de confiabilidade do webhook.

### Verificação

Para verificar se a coluna foi criada:

```sql
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'leads'
  AND column_name = 'last_message_id';
```

### Como o Sistema Funciona Sem Esta Coluna

Se a coluna não existir, o sistema continuará funcionando normalmente, mas:
- ⚠️ **Não haverá proteção contra mensagens duplicadas**
- O webhook processará a mesma mensagem múltiplas vezes se o Z-API reenviar
- Pode resultar em respostas duplicadas ao usuário

### Migração Segura

A coluna é **opcional** no código (via TypeScript `last_message_id?: string | null`), então:
1. ✅ Sistema funciona antes da migração
2. ✅ Após adicionar coluna, idempotência é ativada automaticamente
3. ✅ Rollback simples: apenas remover coluna (dados não são críticos)
