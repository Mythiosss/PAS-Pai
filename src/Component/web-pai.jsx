import { useState } from "react";

const Card = ({ children, className = "" }) => (
  <div className={`card ${className}`}>{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const Button = ({ children, onClick, className = "", variant = "default" }) => {
  const baseStyle =
    variant === "outline"
      ? "bg-transparent border border-[#b89e79] text-[#3c2f2f] hover:bg-[#eee0c8]"
      : "bg-[#b89e79] text-white hover:bg-[#a98e6e]";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded transition ${baseStyle} ${className}`}
    >
      {children}
    </button>
  );
};

export default function SunanKalijagaPage() {
  const [section, setSection] = useState("biografi");
  const [selectedArea, setSelectedArea] = useState(null);

  const sections = {
    biografi: {
      title: "Biografi",
      content:
        "Sunan Kalijaga adalah salah satu Wali Songo yang terkenal dalam sejarah penyebaran Islam di Jawa. Ia memiliki nama asli Raden Said dan merupakan putra dari Adipati Tuban. Ia dikenal karena pendekatan dakwahnya yang halus dan penuh kearifan budaya lokal. Sebelum menjadi wali, Raden Said dikenal sebagai perampok dermawan yang kemudian bertobat setelah bertemu dengan Sunan Bonang."
    },
    wilayah: {
      title: "Wilayah Dakwah",
      content:
        "Wilayah dakwah Sunan Kalijaga mencakup daerah pesisir utara Jawa seperti Demak, Kudus, Jepara, dan Cirebon. Ia berdakwah dengan pendekatan budaya lokal, menjadikan kesenian sebagai media penyebaran Islam seperti wayang, gamelan, dan seni ukir."
    },
    karya: {
      title: "Hasil Karya",
      content:
        "Sunan Kalijaga dikenal melalui karya seni dan budaya yang disusunnya, seperti lakon-lakon wayang yang dimodifikasi dengan pesan-pesan Islam, tembang-tembang Jawa bernuansa spiritual, dan juga peran dalam pembangunan Masjid Agung Demak."
    },
    peran: {
      title: "Peran dalam Penyebaran Islam",
      content:
        "Sunan Kalijaga berperan penting dalam menyebarkan Islam di Jawa dengan cara yang unik dan bersahabat. Ia tidak menghapus tradisi lokal, melainkan memasukkan nilai-nilai Islam ke dalam budaya setempat. Hal ini membuat Islam mudah diterima oleh masyarakat Jawa."
    }
  };

  const wilayahDakwah = {
    Demak:
      "Sunan Kalijaga membantu pembangunan Masjid Agung Demak dan menyebarkan Islam melalui pendekatan budaya.",
    Kudus:
      "Di Kudus, ia memperkenalkan Islam melalui wayang dan tembang Jawa untuk menarik simpati masyarakat.",
    Jepara:
      "Melalui seni ukir dan kerja sama dengan tokoh lokal, Sunan Kalijaga memperluas pengaruh Islam.",
    Cirebon:
      "Bekerjasama dengan Sunan Gunung Jati, ia menyebarkan Islam melalui diplomasi dan pertunjukan seni."
  };

  const InteractiveMap = () => (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Klik wilayah dakwah:</h3>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {Object.keys(wilayahDakwah).map((area) => (
          <Button
            key={area}
            variant="outline"
            onClick={() => setSelectedArea(area)}
          >
            {area}
          </Button>
        ))}
      </div>
      {selectedArea && (
        <div className="map-area">
          <h4 className="font-bold mb-2">{selectedArea}</h4>
          <p>{wilayahDakwah[selectedArea]}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fdf6e3] text-[#3c2f2f] font-serif flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <img
            src="data:image/jpeg;base64,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"
            alt="Masjid Agung Demak"
            className="mx-auto rounded-lg shadow mb-4 max-h-64 object-cover"
          />
          <h1 className="text-4xl font-bold mb-2 border-b pb-2 inline-block">Sunan Kalijaga</h1>
          <p className="italic text-lg mt-2 max-w-xl mx-auto">
            “Mengislamkan budaya, bukan membudayakan Islam.” – Sunan Kalijaga
          </p>
        </div>

        <div className="section-buttons flex justify-center flex-wrap gap-3 mb-6">
          {Object.keys(sections).map((key) => (
            <Button
              key={key}
              variant={section === key ? "default" : "outline"}
              className={section === key ? "active" : "outline"}
              onClick={() => {
                setSection(key);
                setSelectedArea(null);
              }}
            >
              {sections[key].title}
            </Button>
          ))}
        </div>

        <Card>
          <CardContent>
            <h2 className="text-2xl font-semibold mb-4">
              {sections[section].title}
            </h2>
            <p className="text-lg whitespace-pre-line leading-relaxed">
              {sections[section].content}
            </p>
            {section === "wilayah" && <InteractiveMap />}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
