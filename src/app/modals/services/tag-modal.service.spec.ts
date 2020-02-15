import {TestBed} from '@angular/core/testing';

import {MyModalService} from './my-modal.service';

describe('TagModalService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: MyModalService = TestBed.get(MyModalService);
        expect(service).toBeTruthy();
    });
});
