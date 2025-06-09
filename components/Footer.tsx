import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm text-center md:text-left">
        <div>
          <p className="font-semibold mb-2">Bilgi</p>
          <a href="#" className="block hover:underline">
            Hakkımızda
          </a>
          <a href="#" className="block hover:underline">
            Kurumsal Web Sitesi
          </a>
          <a href="#" className="block hover:underline">
            Bayilik Başvuru
          </a>
          <a href="#" className="block hover:underline">
            Kişisel Verilerin Korunması Politikası
          </a>
          <a href="#" className="block hover:underline">
            Sürdürülebilirlik
          </a>
        </div>

        <div>
          <p className="font-semibold mb-2">Genel</p>
          <a href="#" className="block hover:underline">
            Ödeme
          </a>
          <a href="#" className="block hover:underline">
            Mağazalar
          </a>
          <a href="#" className="block hover:underline">
            Kampanyalar
          </a>
          <a href="#" className="block hover:underline">
            Mağaza Kampanyaları
          </a>
          <a href="#" className="block hover:underline">
            Kurumsal Satış
          </a>
        </div>

        <div>
          <p className="font-semibold mb-2">Yardım</p>
          <a href="#" className="block hover:underline">
            Sıkça Sorulan Sorular / İletişim Rehberi
          </a>
          <a href="#" className="block hover:underline">
            İade ve Değişim Şartları
          </a>
          <a href="#" className="block hover:underline">
            Sipariş Takibi
          </a>
          <a href="#" className="block hover:underline">
            Güvenli Alışveriş
          </a>
        </div>

        <div>
          <p className="font-semibold mb-2">Özel Sayfalar</p>
          <a href="#" className="block hover:underline">
            Burak Özçivit
          </a>
          <a href="#" className="block hover:underline">
            Babalar Günü
          </a>
          <a href="#" className="block hover:underline">
            Damat Bohçası
          </a>
          <a href="#" className="block hover:underline">
            Mezuniyet Stili
          </a>
        </div>

        <div>
          <p className="font-semibold mb-2">Müşteri Hizmetleri</p>
          <a href="tel:+908504555657" className="block hover:underline">
            o (850) 455 56 57
          </a>
          <a
            href="mailto:destek@altinyildizclassics.com"
            className="block hover:underline"
          >
            destek@altinyildizclassics.com
          </a>
          <a href="#" className="block hover:underline">
            Çalışma Saatleri Hafta içi 08:00 - 17:20
          </a>
          <a href="#" className="block hover:underline">
            İletişim
          </a>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />
      <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-4 px-4">
        <div>
          <h2>Güvenli Ödeme</h2>
        </div>

        <div className="flex gap-4 flex-wrap justify-end">
          <img src="/mastercard.png" alt="mastercard" className="h-8" />
          <img src="/visa.png" alt="visa" className="h-8" />
          <img src="/troy.svg" alt="troy" className="h-8" />
          <img src="/express.png" alt="express" className="h-8" />
          <img src="/pcilogo2.png" alt="pci" className="h-8" />
          <img src="/qrcode.jpeg" alt="qr" className="h-8" />
        </div>

        <hr className="my-8 h-[2px] bg-gray-500 border-0" />
        <div className="max-w-6xl mx-auto flex justify-start items-center flex-wrap px-4 gap-20">
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/AltinyildizClassics/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/altinyildizclassics"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/AltnyldzClsscs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.youtube.com/c/Alt%C4%B1ny%C4%B1ld%C4%B1zClassicsTR"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.tiktok.com/@altinyildizclassics"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
            >
              <FaTiktok />
            </a>
          </div>

          <div className="flex gap-8">
            <div className="flex gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.brmagazacilik.altinyildiz&referrer=utm_source%3DWebsite%26utm_medium%3DFooter-button&pli=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/google-play.svg"
                  alt="googleplay"
                  className="h-8"
                />
              </a>

              <a
                href="https://apps.apple.com/us/app/alt%C4%B1ny%C4%B1ld%C4%B1z-classics/id1483910505?utm_source=Website&utm_medium=Footer-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/appstore.svg" alt="appstore" className="h-8" />
              </a>

              <a
                href="https://appgallery.huawei.com/#/app/C102893581"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/app-gallery.svg" alt="app-gallery" className="h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
