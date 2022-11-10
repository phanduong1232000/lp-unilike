(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // lazy load img
    $(function() {
        $('.lazy').lazy();
    });

    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 145) {
                $('.fixed-top').addClass('bg-custom shadow');
            } else {
                $('.fixed-top').removeClass('bg-custom shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-custom shadow').css('top', 0);
            } else {
                $('.fixed-top').removeClass('bg-custom shadow').css('top', 0);
            }
        }
    });


    // Back to top button
    var btn = $('#back-to-top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });



    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        lazyLoad: true,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // event caroisel ====================
    $(".event-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    $(".event-carousel1").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        lazyLoad: true,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    $(".event-carousel2").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        lazyLoad: true,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });



})(jQuery);

const content = [{
        title: "1. Mô hình kinh tế chia sẻ",
        p: [
            "Là một mô hình kinh doanh mới của kinh doanh ngang hàng, tận dụng lợi thế của phát triển công nghệ số, giúp tiết kiệm chi phí giao dịch và tiếp cận một số lượng lớn khách hàng thông qua các nền tảng số. Dựa trên 3 nền tảng:",
            "Nằm trong top 100 doanh nghiệp quốc gia và top 10 công ty công nghệ Việt Nam",
            "Nhân bản giải pháp phân quyền phi tập trung sang các nước trong khu vực và thế giới, mục tiêu cung cấp được 10.000.000+ website phân quyền.",
            "Nghiên cứu và khai thác sâu BigData hành vi tương tác của người dùng.",
            "Chuyển đổi số cho 10.000+ doanh nghiệp tiêu biểu trong và ngoài nước."
        ],
        li: [
            "- Nền tảng tập trung.",
            "- Nền tảng phi tập trung.",
            "- Nền tảng hỗn hợp.",
        ]
    },
    {
        title: "2. MÔ HÌNH PHÂN QUYỀN",
        p: [
            "Người kinh doanh có thể tận dụng tối đa nguồn lực kinh doanh sẵn có của công ty UnionTek nhưng vẫn đảm bảo quyền lợi & thương hiệu cá nhân",
            "Nguồn lực của UnionTek bao gồm: nguồn hàng, kho lưu trữ, xử lý đơn, đóng gói, vận chuyển, chăm sóc khách hàng, hệ thống vận hành & quản lý,…",
            "Quyền lợi thành viên: khởi nghiệp kinh doanh an toàn không cần vốn, gia tăng thu nhập, được hỗ trợ đào tạo kinh doanh toàn diện, chính sách hậu mãi tốt nhất,…",
        ],
        li: []
    },
    {
        title: "3. MÔ HÌNH NHƯỢNG QUYỀN",
        p: [
            "Việc mua bán hàng hoá, cung ứng dịch vụ được tiến hành theo cách thức tổ chức kinh doanh do bên nhượng quyền quy định và được gắn với nhãn hiệu hàng hoá, tên thương mại, bí quyết kinh doanh, khẩu hiệu kinh doanh, biểu tượng kinh doanh, quảng cáo của bên nhượng quyền.",
            "Bên nhượng quyền có quyền kiểm soát và trợ giúp cho bên nhận quyền trong việc điều hành công việc kinh doanh",
        ],
        li: []
    },
    {
        title: "4. MÔ HÌNH TRÍ TUỆ - CÔNG NGHỆ",
        p: [
            "UnionTek xây dựng các bộ giải pháp theo nguyên tắc: Trí tuệ + Công nghệ => giá trị cho cộng đồng, đồng thời tạo ra sự lan toả vô điều kiện.",
            "Sản phẩm của Uniontek tinh gọn trong không gian số với rủi ro rất thấp.",
            "UnionTek cung cấp cho cộng đồng giải pháp tốt nhất để đồng hành trên một hành trình bền vững & thịnh vượng. Từ đó, mọi giá trị đều được gia tăng không ngừng: Con người phát triển, Tài sản phát sinh."
        ],
        li: []
    },
    {
        title: "5. HỆ SINH THÁI ĐA DIỆN KẾT HỢP CỘNG ĐỒNG VÀ DOANH NGHIỆP",
        p: [
            "UnionTek từng bước xây dựng các nền tảng, thúc đẩy dòng chảy của nguồn lực, công nghệ, tri thức trong và ngoài nước. Từ đây, các chủ doanh nghiệp, cộng đồng có thể chủ động, tích cực kết nối, khai thác nguồn lực của UnionTek và hợp tác cùng phát triển.",
            "Hệ sinh thái đa diện tập trung kết nối đa dạng lĩnh vực: công nghệ, bảo hiểm, y tế, giáo dục, bất động sản, tiêu dùng thiết yếu,…",
        ],
        li: []
    },
    {
        title: "6. MÔ HÌNH  KINH DOANH TÁI SINH & CÔNG NGHỆ GIA TĂNG GIÁ TRỊ SỐNG",
        p: [
            "Kinh doanh tái sinh là nguyên lý vận hành doanh nghiệp thông minh, đảm bảo sự duy trì và tăng trưởng trong kinh doanh, tạo ra giá trị liên tục nhờ vào việc tái sinh, phát triển, nhân rộng nguồn lực đem lại sự phát triển bền vững đích thực cho xã hội.",
            "Uniontek tạo ra môi trường chia sẻ kiến thức, kinh nghiệm kinh doanh một cách vô điều kiện giúp chuyển hoá <span class='duong-kute'>  NGƯỜI TIÊU DÙNG => NGƯỜI TIÊU DÙNG TRUNG THÀNH => NGƯỜI BÁN HÀNG => NGƯỜI KẾT NỐI => CHỦ DOANH NGHIỆP</span> trên môi trường số với tốc độ nhanh nhất.",
        ],
        li: []
    }
]

// 


// vong xoay
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const items = $$('.lequanglinh-item')

let positionAngle = 0

items.forEach(function (item) {
    item.onclick = function () {
        positionAngle = parseInt(item.dataset.position)
        $('.lequanglinh-deptrai').style.transform = `rotate(-${(positionAngle-1)*60}deg)`

        // clear active class
        items.forEach(function (item) {
            item.classList.remove('active')
        })
        item.classList.add('active')

        const data = content[positionAngle - 1]

        const pList = data.p.map((item) => {
            return (
                `
                    <p>${item}</p>
                `
            )
        }).join("")

        const liList = data.li.map((item) => {
            return (
                `
                    <li>${item}</li>
                `
            )
        }).join("")

        // load content


        $("#content-popup").innerHTML = (
            `
            <div class="section-4-content-vongxoay">
                <h3 class="duong-kute mb-4">${data.title}</h3>
                ${pList}
                <ul>
                    ${liList}
                </ul>
            </div>
            `
        )
    }
});

// handle scroll
// const heightLeader = $("#lanhdao").getBoundingClientRect?.().height

// window.onscroll = function () {
//     let distance = $("#lanhdao").getBoundingClientRect?.().y
//     if(distance < 0 && Math.abs(distance) <= heightLeader ){
//         // console.log(((Math.abs(distance)/heightLeader)*100).toFixed(2))
//         let percent = ((Math.abs(distance)/heightLeader)*100).toFixed(2);
//         $('.lanhdao-wrapper').style.position="fixed";
//         $('.author-content').style.transform = `translateY(-${percent}%)`
//     }else{
//         $('.lanhdao-wrapper').style.position="absolute"
//     }
// };