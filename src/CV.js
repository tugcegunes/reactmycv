import React from 'react';
import './CV.css';
import profilFoto from './profil-fotografi.jpg';
const CV = () => {
    return (
        <div className="cv-container">
            <header className="cv-header">
                <h1>Tuğçe Güneş</h1>
                <h1>Yazılım Geliştirme Uzmanı</h1>
                <p>İletişim Bilgileri: gunestugce11@gmail.com.com</p>
                <img src={profilFoto} alt="Profil" className="profile-pic" />
            </header>
            <section className="education">
                <h2>Eğitim Bilgileri</h2>
                <p>Üniversite: Bahçeşehir Üniversitesi</p>
                <p>Bölüm: Bilgisayar Mühendisliği</p>
                <p>Mezuniyet Yılı: 2028</p>
            </section>
            <section className="experience">
                <h2>İş Deneyimi</h2>
                <p>Şirket:  GEDİK HOLDİNG </p>
                <p>Pozisyon: Yazılım Geliştirici</p>
                <p>Çalışma Süresi: 2021 - Şimdi</p>
                <p>Açıklama: "Backend Geliştiricisi olarak, yüksek trafikli uygulamalarda ölçeklenebilir mikro hizmet mimarileri tasarladım ve uyguladım; RESTful ve GraphQL API'leri geliştirerek üçüncü taraf entegrasyonlarını optimize ettim. Veritabanı yönetimi konusunda PostgreSQL ve MongoDB kullanarak karmaşık veri modelleri oluşturdum, sistem performansını artırmak için profilleme ve optimizasyon teknikleri uyguladım. Ayrıca, kullanıcı kimlik doğrulama ve veri güvenliğini sağlamak için şifreleme yöntemleri geliştirdim; bu süreçte daima en iyi güvenlik uygulamalarını takip ediyorum.</p>
            </section>
            <section className="skills">
                <h2>Yetenekler</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>Laravel</li>
                    <li>PHP</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>HTML+CSS</li>
                </ul>
            </section>
            <section className="hobbies">
                <h2>Hobiler ve İlgi Alanları</h2>
                <p>Yüzme, Seyahat, Kitap Okuma</p>
            </section>
            <footer className="social-media">
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter"></i> Twitter
                </a>
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram"></i> Instagram
                </a>
                </footer>
        </div>
    );
};
export default CV;
