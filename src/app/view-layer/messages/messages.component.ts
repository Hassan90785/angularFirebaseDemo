import {Component, OnInit} from '@angular/core';
import {MessageModel} from "../../business-layer/models/message.model";
import {StoreService} from "../../business-layer/services/store-service.service";
import {HttpWebService} from "../../business-layer/services/http-web.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'message'];
  dataSource: MessageModel[] = [
    {
      "id": 5,
      "name": "Hassan",
      "message": "hi Im hsn"
    },
    {
      "id": 5,
      "name": "Hassan",
      "message": "hi Im hsn"
    },
    {
      "id": 5,
      "name": "Hassan",
      "message": "hi Im hsn"
    },
    {
      "id": 5,
      "name": "Hassan",
      "message": "hi Im hsn"
    }
  ];

  constructor(private storeService: StoreService, public api: HttpWebService) {
  }

  ngOnInit(): void {
    this.getAllMessages();
    // this.dataSource = this.api.temp;
    console.log('DataSource', this.dataSource)
  }

  addMessage() {
    const msg: MessageModel = new MessageModel();
    msg.id = 5;
    msg.message = "hi Im hsn";
    msg.name = 'Hassan';
    this.storeService.addMessage(msg);
  }

  getAllMessages() {
    this.storeService.getAllMessages();
  }
}
