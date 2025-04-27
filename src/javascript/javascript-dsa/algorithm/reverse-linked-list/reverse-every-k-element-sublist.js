function reverse(head, k) {

    let current = head,
    previous = null;

    while (true) {
        const last_node_of_sub_list = current;

        let next = null;

        while (current != null && i < k) {
            next= current.next;
            current.next = previous;
            previous = current;
            current = next;
            i+= 1;
        }
        if (last_node_of_previous_part !== null) {
            last_node_of_previous_part.next = previous;
          } else {
            head = previous;
          }
          last_node_of_sub_list.next = current;
          if (current === null) {
            break;
          }
          previous = last_node_of_sub_list
    };
  return head;
}
