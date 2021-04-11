import { AndroidFilled, AppleOutlined} from '@ant-design/icons';
export default function Download() {
  return (
    <div className=" download">
      <h2>Download Apps</h2>
      <a href="$">
        <div className="item">
          <div className="icon">
            <AndroidFilled />
          </div>
          <div className="description">
            <div className="title">Google Play</div>
            <div className="subtitle">Get It Now</div>
          </div>
        </div>
      </a>
      <a href="$">
        <div className="item">
          <div className="icon">
              <AppleOutlined />
          </div>
          <div className="description">
            <div className="title">App Store</div>
            <div className="subtitle">Now It Available</div>
          </div>
        </div>
      </a>
    </div>
  );
}
