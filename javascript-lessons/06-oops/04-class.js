// now let's create some classes;

// let's see how we can declare class;

class user {
  constructor(userName, id, password, email){
    this.userName = userName;
    this.id = id;
    this.password = password;
    this.email = email;
  }

}

// now let's create a instance of that class;

const user1 = new user("student1", 21, "pass@123", "stu@gmail");

console.log(user1);

// now let's extend the user class;

class teacher extends user {
  constructor(userName,id, password, email,subjectName, grade){
    super(userName);
    this.id = id;
    this.password = password;
    this.email = email;
    

    this.subjectName = subjectName;
    this.grade = grade;
  }
}

// now let's create a object instance from teacher class;

const mathTeacher = new teacher("mathTeacher",12, 123, "math@gmail.com" ,"math", 7);

// let see what we get;

console.log(mathTeacher);

