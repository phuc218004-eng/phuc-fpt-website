import React from 'react';
import { createRoot } from 'react-dom/client';
import { Wifi, ShieldCheck, Tv, Zap, CheckCircle2, Phone, MessageCircle, ArrowRight, Router, Camera, Sparkles, Menu } from 'lucide-react';
import './style.css';

const PHONE_DISPLAY = '0372.191.218';
const PHONE_LINK = '0372191218'; // Kiểm tra lại số điện thoại trước khi công khai website.
const zaloLink = `https://zalo.me/${PHONE_LINK}`;

const plans = [
  { label: 'INTERNET', title: 'Wi-Fi tốc độ cao', price: 'Tư vấn theo khu vực', icon: Wifi, desc: 'Kết nối ổn định cho học tập, làm việc và giải trí.', features: ['Wi-Fi 6 tùy gói/thiết bị', 'Phù hợp gia đình và cá nhân', 'Tư vấn theo nhu cầu sử dụng'], featured: false },
  { label: 'INTERNET + CAMERA', title: 'An tâm mỗi ngày', price: 'Theo ưu đãi hiện hành', icon: Camera, desc: 'Kết hợp Internet và camera để theo dõi nhà cửa thuận tiện.', features: ['Tư vấn vị trí lắp camera', 'Xem điều kiện quà tặng', 'Hướng dẫn sử dụng cơ bản'], featured: true },
  { label: 'INTERNET + TRUYỀN HÌNH', title: 'Giải trí tại nhà', price: 'Tư vấn gói phù hợp', icon: Tv, desc: 'Internet kết hợp truyền hình giải trí cho cả gia đình.', features: ['Tư vấn nội dung và thiết bị', 'Kiểm tra khu vực cung cấp', 'Thông tin ưu đãi theo thời điểm'], featured: false }
];

function App() {
  return <div className="site">
    <div className="topbar"><span><Sparkles size={14}/> Tư vấn lắp đặt Internet & dịch vụ FPT</span><span className="top-right">Hỗ trợ chọn gói phù hợp nhu cầu</span></div>
    <header className="header">
      <a className="brand" href="#home" aria-label="Phuc FPT trang chủ"><span className="brand-mark"><Wifi size={25}/></span><span>PHUC <b>FPT</b><small>TƯ VẤN LẮP ĐẶT</small></span></a>
      <nav><a href="#services">Dịch vụ</a><a href="#plans">Gói dịch vụ</a><a href="#process">Quy trình</a><a href="#contact">Liên hệ</a></nav>
      <a className="header-cta" href={`tel:${PHONE_LINK}`}><Phone size={16}/> Gọi tư vấn</a>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-glow glow-one"></div><div className="hero-glow glow-two"></div>
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot"></span> KẾT NỐI NHANH · TƯ VẤN TẬN TÂM</div>
          <h1>Mạng khỏe hơn.<br/><span>Cuộc sống</span> tiện hơn.</h1>
          <p className="hero-lead">Tư vấn giải pháp Internet, camera an ninh và truyền hình FPT phù hợp với nhu cầu sử dụng của gia đình hoặc cửa hàng bạn.</p>
          <div className="hero-actions"><a className="btn btn-orange" href="#contact">Đăng ký tư vấn <ArrowRight size={18}/></a><a className="btn btn-glass" href="#plans">Khám phá dịch vụ</a></div>
          <div className="hero-points"><span><CheckCircle2 size={17}/> Tư vấn theo nhu cầu</span><span><CheckCircle2 size={17}/> Kiểm tra khu vực lắp đặt</span></div>
        </div>
        <div className="hero-art" aria-label="Minh họa thiết bị mạng và kết nối">
          <div className="orbit orbit-a"></div><div className="orbit orbit-b"></div>
          <div className="signal signal-one"><Wifi size={24}/></div><div className="signal signal-two"><Zap size={20}/></div>
          <div className="router-card"><div className="router-top"><span className="router-led"></span><span className="router-led"></span><span className="router-led"></span><span className="router-led"></span></div><Router className="router-icon" size={84} strokeWidth={1.15}/><div className="router-name">FIBER INTERNET</div><div className="router-lines"><i></i><i></i><i></i><i></i><i></i></div></div>
          <div className="floating-card card-speed"><span className="mini-icon"><Zap size={17}/></span><div><b>Kết nối ổn định</b><small>Cho mọi nhu cầu mỗi ngày</small></div></div>
          <div className="floating-card card-secure"><span className="mini-icon"><ShieldCheck size={18}/></span><div><b>An tâm hơn</b><small>Internet · Camera · TV</small></div></div>
          <div className="hero-caption">KẾT NỐI MỌI ĐIỀU BẠN CẦN</div>
        </div>
        <div className="hero-bottom"><span>INTERNET</span><span className="bottom-line"></span><span>CAMERA</span><span className="bottom-line"></span><span>TRUYỀN HÌNH</span></div>
      </section>

      <section className="trust-strip"><div><span className="trust-icon"><Wifi size={21}/></span><span><b>Internet cáp quang</b><small>Tư vấn theo nhu cầu</small></span></div><div><span className="trust-icon"><Camera size={21}/></span><span><b>Camera an ninh</b><small>Tham khảo giải pháp phù hợp</small></span></div><div><span className="trust-icon"><Tv size={21}/></span><span><b>Truyền hình giải trí</b><small>Khám phá gói dịch vụ</small></span></div><div><span className="trust-icon"><ShieldCheck size={21}/></span><span><b>Hỗ trợ đăng ký</b><small>Kiểm tra điều kiện áp dụng</small></span></div></section>

      <section className="section services" id="services">
        <div className="section-heading"><div><div className="section-kicker">GIẢI PHÁP KẾT NỐI</div><h2>Một nơi, nhiều lựa chọn</h2></div><p>Chọn dịch vụ phù hợp với không gian, số lượng thiết bị và nhu cầu giải trí của bạn.</p></div>
        <div className="service-grid"><article className="service-card service-internet"><div className="service-icon"><Wifi size={27}/></div><div className="service-number">01 / CONNECT</div><h3>Internet cáp quang</h3><p>Giải pháp kết nối cho học tập, làm việc trực tuyến, xem phim và sử dụng nhiều thiết bị.</p><a href="#plans">Tìm hiểu thêm <ArrowRight size={16}/></a><div className="service-decoration"><Wifi size={100}/></div></article>
        <article className="service-card service-camera"><div className="service-icon"><Camera size={27}/></div><div className="service-number">02 / SECURITY</div><h3>Camera an ninh</h3><p>Tham khảo giải pháp quan sát nhà ở, cửa hàng và kiểm tra các ưu đãi camera hiện hành.</p><a href="#plans">Tìm hiểu thêm <ArrowRight size={16}/></a><div className="service-decoration"><ShieldCheck size={100}/></div></article>
        <article className="service-card service-tv"><div className="service-icon"><Tv size={27}/></div><div className="service-number">03 / ENTERTAINMENT</div><h3>Truyền hình FPT Play</h3><p>Khám phá lựa chọn giải trí tại nhà và gói kết hợp Internet, tùy khu vực cung cấp.</p><a href="#plans">Tìm hiểu thêm <ArrowRight size={16}/></a><div className="service-decoration"><Tv size={100}/></div></article></div>
      </section>

      <section className="plans-section" id="plans"><div className="section section-inner"><div className="section-heading light-heading"><div><div className="section-kicker">LỰA CHỌN DỊCH VỤ</div><h2>Tìm gói phù hợp với bạn</h2></div><p>Liên hệ để kiểm tra giá, thiết bị, khu vực phục vụ và ưu đãi đang áp dụng.</p></div><div className="plan-grid">{plans.map((p, i) => {const Icon = p.icon; return <article className={`plan-card ${p.featured ? 'plan-featured' : ''}`} key={p.title}>{p.featured && <div className="popular">ĐƯỢC QUAN TÂM</div>}<div className="plan-icon"><Icon size={25}/></div><div className="plan-label">{p.label}</div><h3>{p.title}</h3><p className="plan-desc">{p.desc}</p><div className="plan-price">{p.price}</div><div className="plan-divider"></div><ul>{p.features.map(f => <li key={f}><CheckCircle2 size={16}/>{f}</li>)}</ul><a className={p.featured ? 'btn btn-orange plan-btn' : 'btn btn-outline plan-btn'} href="#contact">Nhận tư vấn <ArrowRight size={16}/></a></article>})}</div><p className="disclaimer">Thông tin giá cước, tốc độ, thiết bị, quà tặng và điều kiện áp dụng cần được xác nhận theo địa chỉ lắp đặt và chương trình thực tế.</p></div></section>

      <section className="section process" id="process"><div className="section-heading"><div><div className="section-kicker">ĐƠN GIẢN & RÕ RÀNG</div><h2>Đăng ký trong 3 bước</h2></div><p>Để lại thông tin hoặc liên hệ trực tiếp để được hướng dẫn.</p></div><div className="steps"><div className="step"><span>01</span><h3>Gửi nhu cầu</h3><p>Cho biết địa chỉ lắp đặt và dịch vụ bạn quan tâm.</p></div><div className="step-connector"></div><div className="step"><span>02</span><h3>Kiểm tra & tư vấn</h3><p>Trao đổi gói cước, điều kiện cung cấp và ưu đãi.</p></div><div className="step-connector"></div><div className="step"><span>03</span><h3>Xác nhận đăng ký</h3><p>Thống nhất thông tin và lịch lắp đặt theo hướng dẫn.</p></div></div></section>

      <section className="contact-section" id="contact"><div className="contact-orb"></div><div className="contact-content"><div className="section-kicker">BẠN CẦN TƯ VẤN?</div><h2>Cùng chọn giải pháp<br/>phù hợp cho bạn.</h2><p>Liên hệ Phuc FPT để trao đổi nhu cầu lắp Internet, camera hoặc truyền hình.</p><div className="contact-actions"><a className="btn btn-white" href={`tel:${PHONE_LINK}`}><Phone size={18}/> {PHONE_DISPLAY}</a><a className="btn btn-zalo" href={zaloLink} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Nhắn Zalo</a></div><small className="contact-note">Vui lòng xác nhận số điện thoại và đường dẫn Zalo trước khi công khai website.</small></div><div className="contact-badge"><div className="badge-ring"><Wifi size={38}/></div><b>PHUC FPT</b><span>KẾT NỐI TẬN TÂM</span></div></section>
    </main>
    <footer><a className="brand footer-brand" href="#home"><span className="brand-mark"><Wifi size={23}/></span><span>PHUC <b>FPT</b><small>TƯ VẤN LẮP ĐẶT</small></span></a><p>Website tư vấn dịch vụ Internet, camera và truyền hình.</p><span className="copyright">© 2026 Phuc FPT · Thông tin ưu đãi cần xác nhận theo chương trình thực tế.</span></footer>
    <a className="mobile-call" href={`tel:${PHONE_LINK}`}><Phone size={18}/> Gọi tư vấn: {PHONE_DISPLAY}</a>
  </div>
}

createRoot(document.getElementById('root')).render(<App />);