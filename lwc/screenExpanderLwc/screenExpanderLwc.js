import { LightningElement, track, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import SCREEN_EXPANDER_CHANNEL from '@salesforce/messageChannel/screenExpanderChannel__c';


export default class ExpandingArrowLwc extends LightningElement {

    @track _expanded = false;
    @track _cssContainer = 'container';

    @wire(MessageContext)
    messageContext;

    _expand() {
        this._expanded = !this._expanded;
        this._cssContainer = this._expanded ? 'container-expanded' : 'container';

        const message = {
            expanded: this._expanded
        };
        publish(this.messageContext, SCREEN_EXPANDER_CHANNEL, message);
        console.log('message published');
    }
}