import AdminTable from '@/components/AdminTable';
import Button from '@/components/Button';
import { projects } from '@/mockData';
import { Plus, Edit, Trash2 } from 'lucide-react';
import Tag from '@/components/Tag';

export default function AdminProjectsPage() {
  const columns = [
    { header: 'Título', accessor: 'title' },
    {
      header: 'Categoria',
      accessor: 'category',
      render: (value: string) => <Tag>{value}</Tag>,
    },
    {
      header: 'Tags',
      accessor: 'tags',
      render: (value: string[]) => (
        <div className="flex gap-1">
          {value.slice(0, 2).map((tag) => (
            <Tag key={tag} className="text-xs">{tag}</Tag>
          ))}
        </div>
      ),
    },
    {
      header: 'Destaque',
      accessor: 'featured',
      render: (value: boolean) => (
        <span className={value ? 'text-success' : 'text-foreground-muted'}>
          {value ? 'Sim' : 'Não'}
        </span>
      ),
    },
    {
      header: 'Ações',
      accessor: 'id',
      render: () => (
        <div className="flex gap-2">
          <button className="p-2 hover:text-primary transition-colors">
            <Edit size={16} />
          </button>
          <button className="p-2 hover:text-error transition-colors">
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
          <span className="gradient-text">Gerenciar Projetos</span>
        </h1>
        <Button>
          <Plus size={20} className="mr-2" />
          Novo Projeto
        </Button>
      </div>

      <div className="bg-background-secondary border border-border rounded-lg p-6">
        <AdminTable columns={columns} data={projects} />
      </div>
    </div>
  );
}
