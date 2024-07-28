import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ChatbotService } from '../shared/service/chatbot.service';

@Component({
  selector: 'app-chatbot-popup',
  templateUrl: './chatbot-popup.component.html',
  styleUrls: ['./chatbot-popup.component.css']
})
export class ChatbotPopupComponent implements AfterViewInit {

  @ViewChild('chatBox', { static: true }) chatBox!: ElementRef;

  @Input() chatHeaderTitle: string = "";
  @Input() defaultTextMsg: string = "";
  @Input() copy: string = "";
  @Input() linkCopy: string = "";

  isTyping: boolean = false;

  msgErrorDefault: string = `There was a problem sending your message. Please try again later.`;
  userMessage: string = '';
  isChatVisible = false;
  chatMessages: { sender: string, message: string }[] = [];
  options: string[] = [];
  details: string = "Here are the details you requested...";
  furtherOptions: string[] = [];

  constructor(private chatbotService: ChatbotService) {}

  toggleChat() {
    this.isChatVisible = !this.isChatVisible;
  }

  ngAfterViewInit() {
    this.clearChat();
    this.initializeChat();
  }

  private initializeChat() {
    this.respondToUser("Hello! How can I assist you today?");
    this.options = ["Option 1", "Option 2", "Option 3"];
    this.displayOptions();
  }

  private displayOptions() {
    const optionsMessage = this.options.map((opt, index) => `${index + 1}. ${opt}`).join('<br>');
    this.respondToUser(`Please choose an option:<br>${optionsMessage}`);
  }

  public sendMessage(): void {
    this.isTyping = true;
    const userInput = this.userMessage.trim();
    if (userInput !== '') {
      this.appendMessage('user', userInput);

      if (userInput.toLowerCase() === 'exit') {
        this.chatbotService.resetSession('1').subscribe(
          () => {
            this.clearChat();
            this.respondToUser("Your session has been reset.");
            this.initializeChat();
            this.isTyping = false;
          },
          error => {
            this.respondToUser("Could not reset your session, please try again later");
            console.error('Error:', error);
            this.isTyping = false;
          }
        );
      } else {
        this.handleUserInput(userInput);
      }
      this.userMessage = '';
    }
  }

  private handleUserInput(input: string) {
    const optionIndex = parseInt(input) - 1;

    if (optionIndex >= 0 && optionIndex < this.options.length) {
      const selectedOption = this.options[optionIndex];

      if (selectedOption === "Option 1") {
        this.respondToUser(this.details);
        this.furtherOptions = ["Details", "Choose Another Option"];
      } else {
        this.respondToUser(`You selected "${selectedOption}". Here’s more information...`);
        this.furtherOptions = ["Details", "Choose Another Option"];
      }

      this.displayFurtherOptions();
    } else if (this.furtherOptions.length > 0) {
      const furtherOptionIndex = parseInt(input) - 1;

      if (furtherOptionIndex >= 0 && furtherOptionIndex < this.furtherOptions.length) {
        const furtherSelectedOption = this.furtherOptions[furtherOptionIndex];

        if (furtherSelectedOption === "Details") {
          this.respondToUser(this.details);
        } else if (furtherSelectedOption === "Choose Another Option") {
          this.options = ["Option 1", "Option 2", "Option 3"];
          this.respondToUser("Please choose another option:");
          this.displayOptions();
        }
      } else {
        this.respondToUser("I didn't understand that. Please choose an option from the list.");
        this.displayFurtherOptions();
      }
    } else {
      this.respondToUser("I didn't understand that. Please choose an option from the list.");
      this.displayOptions();
    }
    this.isTyping = false;
  }

  private displayFurtherOptions() {
    const furtherOptionsMessage = this.furtherOptions.map((opt, index) => `${index + 1}. ${opt}`).join('<br>');
    this.respondToUser(`Please choose an option:<br>${furtherOptionsMessage}`);
  }

  private respondToUser(response: string): void {
    setTimeout(() => this.appendMessage('bot', response), 500);
  }

  private appendMessage(sender: string, message: string): void {
    this.chatMessages.push({ sender, message });
    setTimeout(() => this.scrollToBottom(), 0);
  }

  private clearChat(): void {
    this.chatMessages = [];
    setTimeout(() => this.scrollToBottom(), 0);
  }

  private scrollToBottom(): void {
    if (this.chatBox) {
      const chatBoxElement = this.chatBox.nativeElement;
      chatBoxElement.scrollTop = chatBoxElement.scrollHeight;
    }
  }

  public onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }
}


