import SingleQuack from './SingleQuack.jsx';
import styles from './QuackFeed.module.css';

function QuackFeed(props) {
  const quackList = props.quacks.map((quack) => (
    <SingleQuack
      key={quack._id}
      content={quack.content}
      author={quack.author}
    />
  ));

  return <div className={styles.feedStyle}>{quackList}</div>;
}

export default QuackFeed;
