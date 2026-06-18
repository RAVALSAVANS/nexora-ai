import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer id="footer" className="footer secPdng">
            <div className="container">

                <div className="dfl fwr jcb footer_items">

                    {/* About */}
                    <div className="f_item about">
                        <div className="ftr_logo">
                            <img
                                src="https://nexora-systems.infinityfreeapp.com/wp-content/themes/nexora-system/assets/images/ftr_logo.png"
                                alt="Logo"
                            />
                        </div>

                        <div className="ftrTxt">
                            Building Scalable digital platforms that help modern
                            enterprises automate, optimize, and grow with confidence.
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="f_item f-links">
                        <h3>Quick Links</h3>

                        <ul className="menu">
                            <li>
                                <Link to="/about">About</Link>
                            </li>

                            <li>
                                <Link to="/solutions">Solutions</Link>
                            </li>

                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>

                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="f_item f-links">
                        <h3>Legal</h3>

                        <ul className="menu">
                            <li>
                                <Link to="/privacy">Privacy Policy</Link>
                            </li>

                            <li>
                                <Link to="/terms">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="f_item ftrContact">
                        <h3>Connect</h3>

                        <div className="social-media">
                            <ul className="dfl fwr alc">

                                {/* LinkedIn */}
                                <li className="icon">
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="linkedin"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path
                                                d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                {/* Twitter */}
                                <li className="icon">
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="twitter"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path
                                                d="M16.845 4.5C16.2675 4.7625 15.645 4.935 15 5.0175C15.66 4.62 16.17 3.99 16.41 3.2325C15.7875 3.6075 15.0975 3.87 14.37 4.02C13.7775 3.375 12.945 3 12 3C10.2375 3 8.79753 4.44 8.79753 6.2175C8.79753 6.4725 8.82753 6.72 8.88003 6.9525C6.21003 6.8175 3.83253 5.535 2.25003 3.5925C1.97253 4.065 1.81503 4.62 1.81503 5.205C1.81503 6.3225 2.37753 7.3125 3.24753 7.875C2.71503 7.875 2.22003 7.725 1.78503 7.5C1.78503 7.5 1.78503 7.5 1.78503 7.5225C1.78503 9.0825 2.89503 10.3875 4.36503 10.68C4.09503 10.755 3.81003 10.7925 3.51753 10.7925C3.31503 10.7925 3.11253 10.77 2.91753 10.7325C3.32253 12 4.50003 12.945 5.91753 12.9675C4.82253 13.8375 3.43503 14.3475 1.92003 14.3475C1.66503 14.3475 1.41003 14.3325 1.15503 14.3025C2.58003 15.2175 4.27503 15.75 6.09003 15.75C12 15.75 15.2475 10.845 15.2475 6.5925C15.2475 6.45 15.2475 6.315 15.24 6.1725C15.87 5.7225 16.41 5.1525 16.845 4.5Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                {/* GitHub */}
                                <li className="icon">
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="github"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path
                                                d="M9 1.5C4.85775 1.5 1.5 4.85775 1.5 9C1.5 12.315 3.6525 15.1275 6.63 16.125C7.005 16.185 7.125 15.9525 7.125 15.75V14.4825C5.0475 14.9325 4.605 13.4775 4.605 13.4775C4.26 12.6075 3.7725 12.375 3.7725 12.375C3.09 11.91 3.825 11.925 3.825 11.925C4.575 11.9775 4.9725 12.6975 4.9725 12.6975C5.625 13.8375 6.7275 13.5 7.155 13.32C7.2225 12.8325 7.4175 12.5025 7.6275 12.315C5.9625 12.1275 4.215 11.4825 4.215 8.625C4.215 7.7925 4.5 7.125 4.9875 6.5925C4.9125 6.405 4.65 5.625 5.0625 4.6125C5.0625 4.6125 5.6925 4.41 7.125 5.3775C7.7175 5.2125 8.3625 5.13 9 5.13C9.6375 5.13 10.2825 5.2125 10.875 5.3775C12.3075 4.41 12.9375 4.6125 12.9375 4.6125C13.35 5.625 13.0875 6.405 13.0125 6.5925C13.5 7.125 13.785 7.7925 13.785 8.625C13.785 11.49 12.03 12.12 10.3575 12.3075C10.6275 12.54 10.875 12.9975 10.875 13.695V15.75C10.875 15.9525 10.995 16.1925 11.3775 16.125C14.355 15.12 16.5 12.315 16.5 9C16.5 4.85775 13.1423 1.5 9 1.5Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                {/* YouTube */}
                                <li className="icon">
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="youtube"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path
                                                d="M7.5 11.25L11.3925 9L7.5 6.75V11.25ZM16.17 5.3775C16.38 6.15 16.5 7.3575 16.5 9C16.5 10.6425 16.38 11.85 16.17 12.6225C15.9825 13.2975 15.5475 13.7325 14.8725 13.92C14.1 14.13 12.1425 14.25 9 14.25C5.8575 14.25 3.9 14.13 3.1275 13.92C2.4525 13.7325 2.0175 13.2975 1.83 12.6225C1.62 11.85 1.5 10.6425 1.5 9C1.5 7.3575 1.62 6.15 1.83 5.3775C2.0175 4.7025 2.4525 4.2675 3.1275 4.08C3.9 3.87 5.8575 3.75 9 3.75C12.1425 3.75 14.1 3.87 14.8725 4.08C15.5475 4.2675 15.9825 4.7025 16.17 5.3775Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p>© 2026 Nexora Systems. All rights Reserved</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
