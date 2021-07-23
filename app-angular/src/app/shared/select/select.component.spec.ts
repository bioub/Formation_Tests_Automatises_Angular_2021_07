import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  let originalConsoleError!: any;

  beforeAll(() => {
    originalConsoleError = console.error;
    console.error = function (message?: any, ...optionalParams: any[]): void {
      const params = optionalParams ? `\nParams: ${optionalParams}` : '';
      fail(`Test contained console error:\n${message}${params}`);
    };
  });

  afterAll(() => {
    console.error = originalConsoleError;
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.values = ['ABC', 'DEF', 'GHI'];
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should throw an error without values', () => {
    expect(() => fixture.detectChanges()).toThrowError('values must be filled');
  });

  it('should show values inside component', () => {
    component.values = ['ABC', 'DEF', 'GHI'];
    fixture.detectChanges();

    // API pour requete le DOM (spécifique à Angular)
    // fixture.debugElement.query(By.css('div:first-child'))

    // Test assez précis (mais peut moins maintenable dans la durée, ex si la balise div devient p)
    // const nativeElement: Element = fixture.nativeElement;
    // expect(nativeElement.querySelector('div:first-child').textContent).toContain('ABC');

    const nativeElement: Element = fixture.nativeElement;
    expect(nativeElement.textContent).toContain('ABC');
  });

  it('should add class selected on selected div', () => {
    component.values = ['ABC', 'DEF', 'GHI'];
    component.selected = 'GHI';
    fixture.detectChanges();

    const nativeElement: Element = fixture.nativeElement;
    expect(nativeElement.querySelector('div:last-child').classList.contains('selected')).toBeTrue();
  });

  it('should emit selectedChange on click', () => {
    component.values = ['ABC', 'DEF', 'GHI'];
    fixture.detectChanges();

    const spy = jasmine.createSpy();
    component.selectedChange.subscribe(spy);

    const nativeElement: Element = fixture.nativeElement;
    const divToClick: HTMLDivElement = nativeElement.querySelector('div:last-child')
    divToClick.dispatchEvent(new MouseEvent('click'));

    expect(spy).toHaveBeenCalledWith('GHI');
  });
});
