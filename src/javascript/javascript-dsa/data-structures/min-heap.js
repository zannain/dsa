export default class MinHeap {
    length;
    data;
    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value) {
            this.data[this.length] = value;
            this.heapifyUp(this.length);
            this.length++
    }
    delete() {
        if (this.length === 0) {
            return -1;
        }
        const out = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return out;
        }
        this.data[0] = this.data[this.length]
        this.heapifyDown(0)
        return out;

    }
    parent(idx) {
        return Math.floor((idx - 1) / 2)
    }
    leftChild(idx) {
        return idx * 2 + 1
    }
    rightChild(idx) {
        return idx * 2 + 2
    }

    heapifyDown(idx) {

        const lIdx= this.leftChild(idx)
        const rIdx = this.rightChild(idx);

        if (idx >= this.length || lIdx >= this.length) {
            return;
        }
        const lV = this.data[lIdx];
        const rV = this.data[rIdx];
        const v = this.data[idx];

        if (lV > rV && v > rV) {
            this.swap(idx, rIdx)
            this.heapifyDown(rIdx)
        } else if (rV > lV && v > lV) {
            this.swap(idx, lIdx)
            this.heapifyDown(lIdx)
        }
    }
    swap(a, b) {
        [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
      }
     heapifyUp(idx) {
        if (idx === 0) {
            return;
        }

        while (idx > 0) {
            const element = this.data[idx];
            const parentIndex = this.parent(idx);
            const parent = this.data[parentIndex];
            if (parent > element) {
                this.swap(idx, parentIndex)
                idx = parentIndex;
            }
        }
    }

}