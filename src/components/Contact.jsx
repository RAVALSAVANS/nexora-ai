import React, { useState } from 'react'
import SparkleIcon from "./common/SparkleIcon";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Please enter your full name";
        if (!form.email.trim()) {
            newErrors.email = "Please enter your work email";
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!form.company.trim()) newErrors.company = "Please enter your company name";
        if (!form.message.trim()) newErrors.message = "Please enter your message";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            // Form is valid — proceed with submission
            alert("Form submitted successfully!");
            setForm({ name: "", email: "", company: "", message: "" });
        }
    };

    return (
        <section className="cont-sport secPdng" id="contact">
            <div className="container">
                <div className="dfl alc fwr jcb">

                    {/* Left Content */}
                    <div className="left">
                        <div className="sec-title">
                            <span className="eyebrow-headline">
                               <SparkleIcon color="#4F46E5" />                                Support & Sales
                            </span>

                            <h2 className="main-title">Get In touch</h2>

                            <p className="description-text">
                                Have questions about Nexora Systems? Our team is here to help
                                you explore the right solutions for your business.
                            </p>
                        </div>

                        <div className="dts">
                            <ul>

                              
                                <li className="dfl alc">
                                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                                        <rect width="38" height="38" rx="8" fill="#4F46E5" fillOpacity="0.1" />
                                        <rect x="0.5" y="0.5" width="37" height="37" rx="7.5" stroke="#4F46E5" strokeOpacity="0.1" />
                                        <path
                                            d="M26.5 14.5C26.5 13.675 25.825 13 25 13H13C12.175 13 11.5 13.675 11.5 14.5V23.5C11.5 24.325 12.175 25 13 25H25C25.825 25 26.5 24.325 26.5 23.5V14.5ZM25 14.5L19 18.25L13 14.5H25ZM25 23.5H13V16L19 19.75L25 16V23.5Z"
                                            fill="#4F46E5"
                                        />
                                    </svg>

                                    <div>
                                        EMAIL
                                        <a href="mailto:Contact@nexorasystems.com">
                                            <strong> Contact@nexorasystems.com</strong>
                                        </a>
                                    </div>
                                </li>

                                {/* Phone */}
                                <li className="dfl alc">
                                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                                        <rect width="38" height="38" rx="8" fill="#4F46E5" fillOpacity="0.1" />
                                        <rect x="0.5" y="0.5" width="37" height="37" rx="7.5" stroke="#4F46E5" strokeOpacity="0.1" />
                                        <path
                                            d="M15.625 12.25H13C12.5875 12.25 12.25 12.5875 12.25 13C12.25 20.0425 17.9575 25.75 25 25.75C25.4125 25.75 25.75 25.4125 25.75 25V22.3825C25.75 21.97 25.4125 21.6325 25 21.6325C24.07 21.6325 23.1625 21.4825 22.3225 21.205C21.895 21.1675 21.7075 21.2425 21.5575 21.385L19.9075 23.035C17.785 21.9475 16.045 20.215 14.965 18.0925L16.615 16.4425C16.825 16.2325 16.885 15.94 16.8025 15.6775C16.525 14.8375 16.375 13.9375 16.375 13C16.375 12.5875 16.0375 12.25 15.625 12.25Z"
                                            fill="#4F46E5"
                                        />
                                    </svg>

                                    <div>
                                        PHONE
                                        <a href="tel:+1234567890">
                                            <strong>+1 (234) 567-890</strong>
                                        </a>
                                    </div>
                                </li>

                                {/* Location */}
                                <li className="dfl alc">
                                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                                        <rect width="38" height="38" rx="8" fill="#4F46E5" fillOpacity="0.1" />
                                        <rect x="0.5" y="0.5" width="37" height="37" rx="7.5" stroke="#4F46E5" strokeOpacity="0.1" />
                                        <path
                                            d="M19 10C15.686 10 13 12.686 13 16C13 20.5 19 28 19 28C19 28 25 20.5 25 16C25 12.686 22.314 10 19 10ZM19 18.5C17.619 18.5 16.5 17.381 16.5 16C16.5 14.619 17.619 13.5 19 13.5C20.381 13.5 21.5 14.619 21.5 16C21.5 17.381 20.381 18.5 19 18.5Z"
                                            fill="#4F46E5"
                                        />
                                    </svg>

                                    <div>
                                        LOCATION
                                        <strong> San Francisco, CA</strong>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="right">
                        <form className="custom-form" onSubmit={handleSubmit} noValidate>

                            <div className="row">
                                <div className="field">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="e.g. John Doe"
                                        className={errors.name ? "error" : ""}
                                    />
                                    <span className={`field-error ${errors.name ? "show" : ""}`}>{errors.name}</span>
                                </div>

                                <div className="field">
                                    <label>Work Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="john@company.com"
                                        className={errors.email ? "error" : ""}
                                    />
                                    <span className={`field-error ${errors.email ? "show" : ""}`}>{errors.email}</span>
                                </div>
                            </div>

                            <div className="field">
                                <label>Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={form.company}
                                    onChange={handleChange}
                                    placeholder="e.g. ABC Corporation"
                                    className={errors.company ? "error" : ""}
                                />
                                <span className={`field-error ${errors.company ? "show" : ""}`}>{errors.company}</span>
                            </div>

                            <div className="field">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows="6"
                                    placeholder="How can we help you?"
                                    className={errors.message ? "error" : ""}
                                ></textarea>
                                <span className={`field-error ${errors.message ? "show" : ""}`}>{errors.message}</span>
                            </div>

                            <div className="submit-btn">
                                <button type="submit" className="btn">
                                    Send Message
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact