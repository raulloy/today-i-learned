import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <img src={logo} height="68" width="68" alt="Today I Learned Logo" />
        <h1>Today I Learned</h1>
        <button>Share a fact</button>
      </header>

      <form>
        <input type="text" placeholder="Share a fact with the world..." />
        <span>200</span>
        <input type="text" placeholder="Trustworthy spurce..." />
        <select>
          <option value="">Choose category:</option>
          <option value="technology">Technology</option>
          <option value="science">Science</option>
          <option value="finance">Finance</option>
        </select>
        <button>Post</button>
      </form>

      <main>
        <aside>
          <ul>
            <li>
              <button>All</button>
            </li>
            <li>
              <button>Technology</button>
            </li>
            <li>
              <button>Science</button>
            </li>
          </ul>
        </aside>

        <section>
          <ul>
            <li>
              <p>
                React is being developed by Meta (formerly facebook)
                <a
                  href="https://opensource.fb.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  (Source)
                </a>
                <span>#technology#</span>
              </p>
              <div>
                <button>
                  👍 <strong>24</strong>
                </button>
                <button>
                  🤯 <strong>9</strong>
                </button>
                <button>
                  ⛔️ <strong>4</strong>
                </button>
              </div>
            </li>
            <li>
              <p>
                Millennial dads spend 3 times as much time with their kids than
                their fathers spent with them. In 1982, 43% of fathers had never
                changed a diaper. Today, that number is down to 3%
                <a
                  href="https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids"
                  target="_blank"
                  rel="noreferrer"
                >
                  (Source)
                </a>
                <span>#society#</span>
              </p>
              <div>
                <button>
                  👍 <strong>11</strong>
                </button>
                <button>
                  🤯 <strong>2</strong>
                </button>
                <button>
                  ⛔️ <strong>0</strong>
                </button>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
