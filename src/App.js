function BookList() {
  return (
    <section className='booklist'>
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
  const title ='Let That Sh*t Go';
  const author = 'Monica Sweeney'
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/71hTq4t1PEL._AC_UL200_SR200,200_.jpg'
        alt=''
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default BookList;
