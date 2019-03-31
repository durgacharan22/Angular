import { TestBed, async, inject } from '@angular/core/testing';

import { AuthRoutesGuard } from './auth-routes.guard';

describe('AuthRoutesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthRoutesGuard]
    });
  });

  it('should ...', inject([AuthRoutesGuard], (guard: AuthRoutesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
