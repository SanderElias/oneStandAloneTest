import { Status, StoreService, StoreState } from "./store.service";

describe( 'StoreService', () => {
  let service: StoreService;
  const initialState: StoreState = StoreService.initialState;

  beforeEach( () => {
    service = new StoreService();
  } );

  it ( 'should set the loading status', () => {
    expect( service.setLoadingStatus( { key: 'loading', status: Status.PENDING }, initialState ).loadingStatus.loading ).toEqual( Status.PENDING );
  } );

} );
