
<template>
    <div class="containe">
        <div class="dime">
            <section id="header">
                
                <a href="a"><img src="../assets/image/tien_ich_thanh_Hue-removebg-preview.png" alt="" class="logo"></a>
                <div>
                    <ul id="navbar">
                        <li ><a href="" class="active">Home</a></li>
                        <li><a href="">shop</a></li>
                        <li> Blog</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>
                            <a href="g" class="icon">
                                <img src="../assets/image/shopping.png" alt="">

                            </a>
                        </li>
                    </ul>
                </div>
              
            </section>
        </div>
        
    </div>
</template>
 
<script>
</script>
<style>
.containe {
  width: 100%;
  height: auto; /* Để tự động điều chỉnh chiều cao */
}

#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px; 
  background-color: #928a33; /* Thay đổi màu nền */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Thêm bóng cho header */
  position: sticky;
  top: 0;
  z-index: 999;
}

#navbar {
  display: flex;
  list-style: none;
  padding-left: 0;
}

#navbar li {
  margin-left: 20px;
}

#navbar a {
  text-decoration: none;
  color: #fff; /* Chỉnh màu chữ */
  padding: 10px 15px; /* Thêm padding cho các liên kết */
  transition: background-color 0.3s; /* Thêm hiệu ứng chuyển tiếp */
}

#navbar a:hover {
  background-color: rgba(255, 255, 255, 0.2); /* Thay đổi màu khi hover */
}

.icon img {
  height: 40px; /* Chỉnh kích thước icon shopping */
  width: 40px;
}

.logo {
  height: 100px; /* Chỉnh kích thước logo */
  width: 100px;  /* Để giữ tỷ lệ */
}

</style>