/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
const splitListToParts = (head, k) => {
  const answer = Array(k).fill(null);

  let listLen = 0;
  let curr = head;

  // 연결 리스트의 길이를 계산
  while (curr) {
    listLen++;
    curr = curr.next;
  }

  // 각 파트의 기본 크기(baseCnt) 계산
  const baseCnt = Math.floor(listLen / k);

  // 길이가 맞지 않을 때 더 길게 할 부분의 개수(extraCnt) 계산
  let extraCnt = listLen % k;

  // 다시 리스트의 처음부터 시작
  curr = head;

  // 각 파트를 나누어 answer 배열에 저장
  for (let i = 0; i < k; i++) {
    // 연결 리스트의 현재 위치가 null이면 null을 answer에 저장
    if (!curr) {
      answer[i] = null;
    } else {
      // 현재 노드를 answer 배열에 저장
      answer[i] = curr;

      // 현재 파트의 크기 결정 (기본 크기 + 추가할 하나)
      let size = baseCnt + (extraCnt > 0 ? 1 : 0);

      // 다음 파트를 위해 남은 추가 크기를 감소
      extraCnt--;

      // 현재 파트의 끝까지 이동
      for (let j = 1; j < size; j++) {
        curr = curr.next;
      }

      // 현재 파트의 끝에서 연결 끊기
      if (curr) {
        let nextNode = curr.next; // 다음 노드 기억
        curr.next = null; // ** 현재 파트의 끝 노드의 next를 null로 설정 **
        curr = nextNode; // curr를 다음 노드로 이동
      }
    }
  }

  return answer;
};
