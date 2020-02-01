import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {TagModalComponent} from './tag-modal.component';

describe('TagModalComponent', () => {
    let component: TagModalComponent;
    let fixture: ComponentFixture<TagModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TagModalComponent],
            imports: [IonicModule.forRoot()],
        }).compileComponents();

        fixture = TestBed.createComponent(TagModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
