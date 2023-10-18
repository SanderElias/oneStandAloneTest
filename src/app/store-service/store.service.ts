import { Injectable } from '@angular/core';

export enum Status {
  IDLE,
  PENDING,
  DONE,
  ERROR,
}

export interface StoreState {
  loadingStatus: LoadingStatus;
}

export interface LoadingStatus {
  loading: Status;
}

const initialStatus: LoadingStatus = {
  loading: Status.IDLE,
};

@Injectable()
export class StoreService {
  static readonly initialLoadingStatus = initialStatus;

  static readonly initialState: StoreState = {
    // loadingStatus: { loading: Status.IDLE }, //StoreService.initialLoadingStatus
    loadingStatus: StoreService.initialLoadingStatus,
  };

  setLoadingStatus(
    { key, status }: { key: string; status: Status },
    state: StoreState
  ): StoreState {
    return {
      ...state,
      loadingStatus: {
        ...state.loadingStatus,
        [key]: status,
      },
    };
  }
}


