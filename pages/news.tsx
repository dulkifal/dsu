import Head from "next/head";
import s from "../styles/News.module.css";
import Footer from "../components/Footer";

export default function News() {
  const newsItems = [
    {
      id: 1,
      date: "April 15, 2024",
      title: "DSU Launches New Welfare Scheme",
      content: "The Darul Huda Students' Union has officially launched a new welfare scheme aimed at providing financial and academic support to underprivileged students. The scheme includes textbook libraries and scholarship grants.",
    },
    {
      id: 2,
      date: "March 28, 2024",
      title: "Grand Success at the Inter-Collegiate Debate",
      content: "Our debate team secured the first position at the National Inter-Collegiate Debate Championship held in Calicut. Congratulations to the team for their outstanding performance and dedication.",
    },
    {
      id: 3,
      date: "February 10, 2024",
      title: "Campus Cleanliness Drive",
      content: "A massive campus cleanliness drive was organized by the DSU volunteers last weekend. Over 200 students participated to ensure a green and clean environment across the university premises.",
    },
  ];

  return (
    <>
      <Head>
        <title>News & Updates | DSU</title>
        <meta name="description" content="Latest news and updates from Darul Huda Students Union" />
      </Head>
      <div className={s.newsPage}>
        <div className={s.headerArea}>
          <h1>News & Updates</h1>
          <p>Stay informed about the latest activities, achievements, and announcements.</p>
        </div>

        <div className={s.newsContainer}>
          {newsItems.map((news) => (
            <div key={news.id} className={s.newsCard}>
              <span className={s.newsDate}>{news.date}</span>
              <h2>{news.title}</h2>
              <p>{news.content}</p>
              <button className={s.readMoreBtn}>Read Full Article</button>
            </div>
          ))}
        </div>

        <div style={{ width: "100%", marginTop: "auto" }}>
          <Footer />
        </div>
      </div>
    </>
  );
}
