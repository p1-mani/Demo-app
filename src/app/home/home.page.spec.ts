import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {Geolocation} from '@ionic-native/geolocation/ngx';

import { HomePage } from './home.page';
import { Subject } from 'rxjs';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  beforeEach(waitForAsync(() => {
    const geolocation = {
      getCurrentPosition: new Subject(),
    };
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot()],
      providers: [ Geolocation
        /* {
        providers: Geolocation,
        useValue: geolocation,
      }, */
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call geoinformation and return values', async () =>{
    let component = fixture.debugElement.componentInstance;
    await component.geoInformation();
    expect(component.lat).toBeDefined
    expect(component.long).toBeDefined;
    expect(component.lat).not.toBeNull();
    expect(component.long).not.toBeNull();

  })
});
