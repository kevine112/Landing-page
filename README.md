-------------------------------------------------------------- Assigment JavaScript FSD harisenin.com --------------------------------------------------
hello my name is Kevin Hetratma no.36
here i want to explain what i create ( Landing page with DOM, Function, Looping, Array, etc )
1. DOM >= in my code, iam using DOM to get element from html. example : 
	- document.getElementById = parseFloat(document.getElementById('num1')
	- addEventListener = loginForm.addEventListener('submit', (e) => {}
							
2. Function >= i create function to define calculate() also inside the function has DOM, switch, if else. example : 
	- function calculate() {}
	- function finish() {}
	- DOM	  const num1 = parseFloat(document.getElementById('num1').value);
		  const num2 = parseFloat(document.getElementById('num2').value);
		  const operator = document.getElementById('operator').value;
	- switch (operator) {
      		case '+':
        		result = num1 + num2;
       		break;
     		 case '-':
       			result = num1 - num2;
        	break;
      		case '*':
        		result = num1 * num2;
        	break;
      		case '/':
			if (num2 !== 0) {
          		result = num1 / num2;
        		} else {
          		result = 'Tidak dapat membagi dengan nol.';
        		}
        		break;
      		default:
        		result = 'Operator tidak valid';

3. Looping >= in my code, theres no for / while , but i make loop with
  - document.getElementById('calculateButton').addEventListener('click', calculate);
so this have a function, when you click ( hasil ), it will give you a list from all result you create and if you want to delete lastest result, you can do refresh page or click selesai button.

4. Array >= now i will explain where is array
  - const users = [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' },
      { username: 'user3', password: 'password3' },
      ];

5. showPassowrd >= i create show password for user can see what they input in password column
   - const showPasswordIcon = document.getElementById('showPassword');
      showPasswordIcon.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          showPasswordIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 hover:text-gray-800 transition-colors" viewBox="0 0 20 20" fill="currentColor"><path d="M4.293 5.293a1 1 0 011.414 0L10 10.586l4.293-4.293a1 1 0 111.414 1.414L11.414 12l4.293 4.293a1 1 0 01-1.414 1.414L10 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 12 4.293 7.707a1 1 0 010-1.414z"/></svg>';
        } else {
          passwordInput.type = 'password';
          showPasswordIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 hover:text-gray-800 transition-colors" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path d="M15.364 4.636a9.5 9.5 0 01-2.828 2.828l-1.293-1.293a7.5 7.5 0 101.415-1.414l-1.293-1.293a9.5 9.5 0 012.828 2.828l1.293 1.293a7.5 7.5 0 00-1.414 1.415l1.293 1.293a9.5 9.5 0 01-2.828-2.828l-1.293-1.293a7.5 7.5 0 001.415-1.414l-1.293-1.293z"/></svg>';
        }
        });

6. localStorage >= localStorage mean if user succes login, it will save in localStorage. you can see in >
   ( login > if succes login,open web insert and go to aplication and click local Storage. there you can see data saved if succes login )
   -     localStorage.setItem('username', username);
         localStorage.setItem('password', password);

7. end to end >= so i make end to end with selesai button. when user click selesai button, it will give you a alert to confirm reset. page will refresh if you click OK alert and page will not reset if you click cancel
   - const finishButton = document.getElementById('finishButton');
     finishButton.addEventListener('click', finish);

# so thats all i can explain in my code, i hope what i guide will give you correct answer because i am a new developer's.


-----------------------------------------------------------------------------------

Best regards,
Kevin Hetratama
