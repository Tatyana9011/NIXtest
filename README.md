# NIXtest
Практика Advanced JS 10.<br/>
Создайте функцию, которая проверяет пароль (переданный в виде строки), чтобы убедиться, что он соответствует следующим требованиям:
1. От 8 до 20 символов.<br/>
2. Содержит только следующие символы (и хотя бы по одному из каждой категории): заглавные буквы, строчные буквы, цифры, специальные символы из !@#$%^&*?.<br/>

Примеры кода:
   check_password("") => "not valid"<br/>
   check_password("password") =>"not valid"<br/>
   check_password("P1@p") => "not valid"<br/>
   check_password("P1@pP1@p") => "valid"<br/>
   check_password("P1@pP1@pP1@pP1@pP1@pP1@p") => "not valid"<br/>
   check_password("Paaaaaa222!!!") => "valid"<br/>
