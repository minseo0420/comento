document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#toDo')
  const addButton = document.querySelector('#addButton')
  const todoList = document.querySelector('#todoList')
  const alert = document.querySelector('span')

  // '일정추가' 버튼 생성
  const addTodo = () => {
    if (input.value !== '') {
      const item = document.createElement('div')
      // 일정 완료 표시
      const checkbox = document.createElement('input')
      checkbox.type='checkbox'
       // 일정 입력 공간
      const text = document.createElement('span');
      // 제거하기 버튼
      const deleteButton = document.createElement('button')
      deleteButton.textContent="일정제거"

      text.textContent = input.value
      input.value=''
            
      item.appendChild(checkbox)
      item.appendChild(text)
      item.appendChild(deleteButton)
      todoList.appendChild(item)

      // 체크박스 이벤트 리스너
      checkbox.addEventListener('change', (event) =>{ 
        if (event.currentTarget.checked){
            text.style.textDecoration='line-through'
          }else {
            text.style.textDecoration='none'}
        })

      // 제거하기 버튼 클릭 이벤트 리스너
      deleteButton.addEventListener('click', (event) => {
      todoList.removeChild(event.currentTarget.parentNode)
      })
      input.value =''
      alert.textContent = ''
    }
    else alert.textContent = '다시 입력해주세요'
  }

  addButton.addEventListener('click', addTodo)
  
  // 할 일 입력창에서 enter key가 눌렸을 때
  input.addEventListener('keypress', (event) => {
    const ENTER = 13
    if (event.keyCode === ENTER)
      addTodo();
    })
})
