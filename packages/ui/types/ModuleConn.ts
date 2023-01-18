export interface ModulePage {
  id: number;
  code: string;
  slug: string;
  isActive: boolean;
}

export interface ModuleNode {
  id: number;
  code: string;
  name: string;
}

export interface ModuleConn {
  id: number;
  ModulePageId: number;
  ModuleNodeId: number;
  isActive: boolean;
  ModulePage: ModulePage;
  ModuleNode: ModuleNode;
}