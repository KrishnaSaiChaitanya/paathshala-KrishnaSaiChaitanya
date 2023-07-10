import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTesting = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Testing, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTesting = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Testing, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Testing = LazyLoading extends LazyLoadingDisabled ? EagerTesting : LazyTesting

export declare const Testing: (new (init: ModelInit<Testing>) => Testing) & {
  copyOf(source: Testing, mutator: (draft: MutableModel<Testing>) => MutableModel<Testing> | void): Testing;
}

type EagerJobs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Jobs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly title?: string | null;
  readonly comment?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJobs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Jobs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly title?: string | null;
  readonly comment?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Jobs = LazyLoading extends LazyLoadingDisabled ? EagerJobs : LazyJobs

export declare const Jobs: (new (init: ModelInit<Jobs>) => Jobs) & {
  copyOf(source: Jobs, mutator: (draft: MutableModel<Jobs>) => MutableModel<Jobs> | void): Jobs;
}