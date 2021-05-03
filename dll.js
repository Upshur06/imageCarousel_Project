export class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  export default class DoubleLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    /**
     * Push a new value to the tail of the linked list.
     */
  
    push(value) {
        let node = new Node(value);

        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node
        }
        this.length++;
    }
  
    /**
     * Remove an item from the end of the linked list.
     */
    pop() {
        if(!this.tail){
            return null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
    }
  
    /**
     * Remove a node from the beginning of the list.
     */
    shift() {
        if(!this.head){
            return null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
    }
  
    /**
     * Add a node to the head of the linked list.
     */
    unshift(value) {
        let node = new Node(value);

        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }
  
    /**
     * Get a Node at a specific index
     */
    getNodeAtIndex(index) {}
  
    /**
     * Set a node at a specific index.
     */
    setNodeAtIndex(index, value) {}
  
    /**
     *  Insert a node at a specific index.
     */
    insertAtIndex(index, val) {}
  
    /**
     * Remove a node at a specific index.
     */
    removeAtIndex(index) {}
  }
  