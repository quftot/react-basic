function Bs() {
    return (
        <>
            <Header/>
            <Main/>
            <Slide/>
            <List/>
            <List1/>
            <Store/>
            <Deli/>
            <Sns/>
            <Footer/>
        </>
    )
}

function Header() {
    return (
        <>
            <header id="header">
                <h1><a href="#"><img src="../img/logo.png" alt="logo" /></a></h1>
                <div id="menu">
                    <a href="#">FOM</a>
                    <a href="#">STORE</a>
                    <a href="#">단체주문</a>
                    <button className="hm">
                        <img src="../img/btn_menu.png" alt="ham_btn" />
                    </button>
                </div>
            </header>
        </>
    )
}

function Main() {
    return (
        <>
            <div id="main">
                <a href="#"><img src="../img/banner.jpg" alt="b"/></a>
            </div>
        </>
    )
}

function Slide() {
    return (
        <>
            <div id="slide">
                <ul className="cf">
                    <li><img src="../img/b1.png" alt="b1"/></li>
                    <li><img src="../img/b2.png" alt="b2"/></li>
                    <li><img src="../img/b3.png" alt="b3"/></li>
                </ul>
                <div id="roll">
                    <a href="#" className="on"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>
            </div>
        </>
    )
}

function List() {
    return (
        <>
            <section id="list">
                <h3>BR EVENT</h3>
                <ul className="cf">
                    <li>
                        <a href="">
                            <img src="../img/list1.png" alt="lst1"/>
                            <span className="im"><img src="../img/stit_store.gif" alt="stit_store"/></span>
                            <span className="txt">해피오더 딜리버리로 간편하게 주문하세요!</span>
                            <span className="txt1">상시진행</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="../img/list2.png" alt="lst2" />
                            <span className="im"><img src="../img/stit_store.gif" alt="stit_store"/></span>
                            <span className="txt">해피오더 딜리버리로 간편하게 주문하세요!</span>
                            <span className="txt1">상시진행</span>
                        </a>
                    </li>
                </ul>
                <div id="roll2">
                    <a href="#" className="active"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>
            </section>
        </>
    )
}

function List1() {
    return (
        <>
            <section id="list1">
                <h3>BR MENU</h3>
                <div className="ban">
                    <img src="../img/listgroup.png" alt="ban" />
                </div>
            </section>
        </>
    )
}

function Store() {
    return (
        <>
            <section id="store">
                <h3>BR STORE</h3>
                <img src="../img/fban.jpg" alt="fban" />
            </section>
        </>
    )
}

function Deli() {
    return (
        <>
            <section id="deli">
                <h3>HAPPY ORDER & DELIVERY</h3>
                <img src="../img/deli.jpg" alt="fban" />
            </section>
        </>
    )
}

function Sns() {
    return (
        <>
            <section id="sns">
                <h3>SNS</h3>
                <ul>
                    <li><a href="#"><img src="../img/f.png" alt="f" /></a></li>
                    <li><a href="#"><img src="../img/t.png" alt="f" /></a></li>
                    <li><a href="#"><img src="../img/b.png" alt="f" /></a></li>
                    <li><a href="#"><img src="../img/u.png" alt="f" /></a></li>
                    <li><a href="#"><img src="../img/i.png" alt="f" /></a></li>
                </ul>
            </section>
            <h4 className="line">
                <a href="#"><img src="../img/tt.png" alt="tt" /></a>
            </h4>
            <div id="listimg">
                <ul>
                    <li><a href="#"><img src="../img/ff.png" alt="flist" /></a></li>
                    <li><a href="#"><img src="../img/ff.png" alt="flist" /></a></li>
                    <li><a href="#"><img src="../img/ff.png" alt="flist" /></a></li>
                    <li><a href="#"><img src="../img/ff.png" alt="flist" /></a></li>
                </ul>
            </div>
        </>
    )
}

function Footer() {
    return (
        <>
            <footer id="footer">
                <p>사업자 등록번호 : 000-00-00000</p>
                <p>주연코리아(주) 대표이사 김준수</p>
                <p>서울특별시 서초구 남부순환로 1234</p>
                <p>개인정보관리책임자 : 이지현</p>
            </footer>
        </>
    )
}

ReactDOM.render(
    <Bs/>,
    document.getElementById("root")
);