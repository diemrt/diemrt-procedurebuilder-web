export interface ProcedureRootType {
  procedure: ProcedureType;
}

export interface ProcedureType {
  name: string;
  description: string;
  isStepByStep: boolean;
  isConfirmationNeeded: boolean;
  steps: ProcedureStepType[];
}

export interface ProcedureStepType {
  name: string;
  description: string;
  image?: string;
  timeToRead: number;
  isSubTasksMandatory?: boolean;
  subTasks?: ProcedureSubTaskType[];
}

export interface ProcedureSubTaskType {
  name: string;
  description?: string;
}
