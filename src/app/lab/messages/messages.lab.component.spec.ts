import { MessagesComponentForLab } from './messages.lab.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from 'src/app/services/message/message.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('2-message component integration testing:', () => {
  let fixture: ComponentFixture<MessagesComponentForLab>;
  let messageService: MessageService;
  let debugElement: DebugElement;
  let component: MessagesComponentForLab;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesComponentForLab],
      providers: [MessageService],
    });

    fixture = TestBed.createComponent(MessagesComponentForLab);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('expect comp. created successfully', () => {
    expect(component).toBeTruthy();
  });

  it('expect component template to be empty', () => {
    //Note: there is *ngIf="messageService.messages.length" in line 1 in template
    const template = debugElement.query(By.css('.msg'));
    expect(template).toBeFalsy();
  });

  it('then expect div.msg to have the messages after setting it', () => {
    const message = 'Message';
    messageService.messages.push(message);
    fixture.detectChanges();

    const template = debugElement.query(By.css('.msg'));
    expect(template).toBeTruthy();
    expect(template.nativeElement.textContent).toContain(message);
  });
});
