/**
 * Bài tập 1 
 * Input: Cho 3 số nguyên
 * 
 * 
 * Process: tạo 3 variable int1, int2 , int3
 *          int3 > int2 && int3 > int1 && int2 > int1 => int3 > int2 > int1
 *          int2 > int3 && int 2 > int1 && int3 > int1 => int2 > int3 > int1 
 *          int1 >int3 && int1  >int2 && int2 > int3 => int1 > int2 > int3
 * 
 * 
 * Output:  int3 > int2 > int1
 * 
 * 
 * 
 */

var int3=3,int2=5,int1=6;

if (int3 === int2 && int3 === int1) {
    console.log( int3 , "=", int2 , "= " ,int1)
} else if(int3 == int2) {
    if(int2 > int1) {
        console.log(int3 , "=", int2 , ">", int1)
    } else {
        console.log(int1 , ">", int2,"=", int3)
    }
} else if (int2 == int1) {
    if(int2 > int3) {
        console.log(int2 ,"=", int1 , "> " , int3)
    } else {
        console.log(int3, "> ", int2 ,"=", int1)
    }
} else if (int3 > int2 && int3 > int1 && int2 > int1) {
    console.log(int3, ">", int2 , ">", int1)
} else if ( int2 > int3 && int2 > int1 && int3 > int1) {
    console.log(int2 , ">", int3 , ">", int1)
} else if (int1 > int2 && int1 > int3 && int2 > int3) {
    console.log(int1 , ">", int2,">", int3)
} else {
    console.log("Số nhập không đúng !")
}

   
/**
 * Bài tập 2 :
 * 
 * Input: Tên 4 thành viên trong gia đình
 * 
 * Process:Nhập tên thành viên 
 *          tạo 4 biến b, m , a, e 
 *          b,m, a,e => "Chào hỏi"
 * 
 * 
 * Output: Chào hỏi thành viên gia đình 
 */


console.log("Nhập tên người sử dụng :")

var father = "Bố";
var mother = "Mẹ ";
var brother ="Anh Trai";
var sister = "Em Gái";
var who= "Bố";

if(who ===father) {
    console.log("Xin chào Bố !")
} else if (who===mother) {
    console.log("Xin chào Mẹ !")

} else if (who===brother) {
    console.log("Xin chào Anh trai !")

} else if(who===sister) {
    console.log("Xin chào Em gái !")

} else {
    console.log("Vui lòng nhập lại tên !")
}

/**
 * Bài tập 3:
 * 
 * Input:Cho 3  số nguyên
 * 
 * 
 * process: Nhập 3 số nguyên 
 *          tạo biến int11 ,int22 ,int33
 *          số chẵn % 2 = 0
 * 
 * 
 * 
 * Output:Xác định có bao nhiêu số chẵn số lẻ 
 */



var int11 = 11;
var int22 = 22;
var int33 = 33;
var even = 0;
var odd = 0;

if(int11 % 2 == 0) {
    ++even;
   
} else {
    ++odd;
}



if(int22 % 2 == 0 ) {
    ++even;
} else {
    ++odd;
}


if(int33 % 2 == 0) {
    ++even;
   
   
} else {
    ++odd;
}

console.log("Số chẵn là :", even,  );
console.log("Số lẻ là :", odd);

/**
 * Bài tập 4 :
 * Input: Cho 3 cạnh tam giác
 * 
 * Process: tạo edgeA , edgeB , edgeC
 *          2 cạnh bằng nhau = > cân
 *          3 cạnh bằng nhau => đều
 *          đúng Pytago=> Vuông
 * 
 * 
 * Output: Xác định loại tam giác
 */

var edgeA = 3;
var edgeB = 4;
var edgeC = 5;


if( edgeA == edgeB && edgeA == edgeC) {
    console.log("Tam giác Đều")

} else if (edgeA == edgeB || edgeA == edgeC) {
    console.log("Tam giác Cân")

} else {
    if( edgeA*edgeA === edgeB*edgeB + edgeC*edgeC) {
        console.log("Tam giác vuông ");

    } else if( edgeB*edgeB === edgeA*edgeA + edgeC*edgeC) {
        console.log("Tam giác vuông ");

    } else if(  Math.pow(edgeC,2)=== edgeA*edgeA + edgeB*edgeB) {
        console.log("Tam giác vuông ");
    } else {
        console.log("Tam giác bình thường !!!!")
    }
}



