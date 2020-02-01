import {TestBed} from '@angular/core/testing';

import {TagModalService} from './tag-modal.service';

describe('TagModalService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: TagModalService = TestBed.get(TagModalService);
        expect(service).toBeTruthy();
    });
});
