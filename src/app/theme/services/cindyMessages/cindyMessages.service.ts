import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/primeng';

@Injectable()
export class CindyMessagesService {
    constructor(private messageService: MessageService) { }

    add(msg: Message) {
        this.messageService.add(msg);
    }

    addAll(msgs: Message[]) {
        this.messageService.addAll(msgs);
    }

    clear() {
        this.messageService.clear();
    }
}
