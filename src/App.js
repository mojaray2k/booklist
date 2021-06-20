function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/71hTq4t1PEL._AC_UL200_SR200,200_.jpg'
    alt=''
  />
);

const Title = () => (
  <h1>
    Let That Sh*t Go:
  </h1>
);

const Author = () => <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Monica Sweeney</h4>

export default BookList;
