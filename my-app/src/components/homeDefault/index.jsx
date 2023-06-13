import classNames from "classnames/bind";
import {useEffect, useState} from "react";
import axios from 'axios';


import styles from "./homeDefault.module.scss";

const cx = classNames.bind(styles);

const HomeDefault = () => {

  // useEffect(() => {
  //   fetch('http://127.0.0.1:8000/api/all')
  //     .then(response => {
  //       console.log("da vao day")
  //       if (!response.ok) {
  //         throw new Error('Network response was not OK');
  //       }
  //       return response.json();
  //     })
  //     .then(json => {
  //       console.log(json);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  const [token, setToken] = useState('')
  // useEffect(() => {
  //   axios.post('http://127.0.0.1:8000/login/', {
  //     username: 'admin',
  //     password: '123',
  //   })
  // .then(response => {
  //   // Handle the response
  //   setToken(response.data.token)
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   // Handle the error
  //   console.error(error);
  // });
  // }, []);

  // useEffect(() => {
  //   axios.post('http://127.0.0.1:8000/logout/', null, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Token ${token}`,
  //     }
  //   })
  //   .then(response => {
  //     // Handle successful logout
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     // Handle error
  //     console.error('Logout failed:', error);
  //   });
  // }, []);


  useEffect(() => {
    axios
      .post('http://127.0.0.1:8000/login/', {
        username: 'admin',
        password: '123',
      })
      .then(response => {
        // Handle the response
        setToken(response.data.token);
        console.log(response.data);
  
        axios
          .post('http://127.0.0.1:8000/logout/', null, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token 022e64b05f5b3939379b95a8c4a44463e109eb65`,
            },
          })
          .then(response => {
            // Handle successful logout
            console.log(response.data);
          })
          .catch(error => {
            // Handle error
            console.error('Logout failed:', error);
          });
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  }, []);
  




  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // }, []);




  return (
    <div
      className={cx(
        "homeDefault__wrap",
        "container lg:w-5/6 xl:w-4/5 2xl:w-4/6 mx-2",
      )}
    >
      <div className={cx("homeDefault__wrap__content")}>
        <div className={cx("homeDefault__wrap__content__title")}>
          <h1 className={cx("homeDefault__wrap__content__title__text")}>
            Welcome to my website
          </h1>
        </div>
        <div className={cx("homeDefault__wrap__content__title")}>
          <h1 className={cx("homeDefault__wrap__content__title__text")}>
            I wish this web can useful
          </h1>
        </div>
        <div className={cx("homeDefault__wrap__content__title")}>
          <h1 className={cx("homeDefault__wrap__content__title__text")}>
            Search movies with all your imagination
          </h1>
        </div>
      </div>
      <div className={cx("homeDefault__wrap__footer")}>
        <div className={cx("homeDefault__wrap__footer__content")}>
          <div
            className={cx(
              "homeDefault__wrap__footer__content__contact__content",
              "grid grid-cols-5 gap-10",
            )}
          >
            <div
              className={cx(
                "homeDefault__wrap__footer__content__contact__content__item",
              )}
            >
              <div
                className={cx(
                  "homeDefault__wrap__footer__content__contact__content__item__text",
                )}
              >
                <p
                  className={cx(
                    "homeDefault__wrap__footer__content__contact__content__item__text__title",
                  )}
                >
                  <label
                    className={cx(
                      "homeDefault__wrap__footer__content__contact__content__item__text__title__icon",
                    )}
                  >
                    <i className={cx("fas fa-map-marker-alt")}></i>
                  </label>
                  Address
                </p>
              </div>
            </div>
            <div
              className={cx(
                "homeDefault__wrap__footer__content__contact__content__item",
              )}
            >
              <div
                className={cx(
                  "homeDefault__wrap__footer__content__contact__content__item__text",
                )}
              >
                <p
                  className={cx(
                    "homeDefault__wrap__footer__content__contact__content__item__text__title",
                  )}
                >
                  <label
                    className={cx(
                      "homeDefault__wrap__footer__content__contact__content__item__text__title__icon",
                    )}
                  >
                    <i className={cx("fa-brands fa-facebook-f")} />
                  </label>
                  Facebook
                </p>
              </div>
            </div>
            <div
              className={cx(
                "homeDefault__wrap__footer__content__contact__content__item",
              )}
            >
              <div
                className={cx(
                  "homeDefault__wrap__footer__content__contact__content__item__text",
                )}
              >
                <p
                  className={cx(
                    "homeDefault__wrap__footer__content__contact__content__item__text__title",
                  )}
                >
                  <label
                    className={cx(
                      "homeDefault__wrap__footer__content__contact__content__item__text__title__icon",
                    )}
                  >
                    <i className={cx("fa-brands fa-github")} />
                  </label>
                  Githup
                </p>
              </div>
            </div>

            <div
              className={cx(
                "homeDefault__wrap__footer__content__contact__content__item",
              )}
            >
              <div
                className={cx(
                  "homeDefault__wrap__footer__content__contact__content__item__text",
                )}
              >
                <p
                  className={cx(
                    "homeDefault__wrap__footer__content__contact__content__item__text__title",
                  )}
                >
                  <label
                    className={cx(
                      "homeDefault__wrap__footer__content__contact__content__item__text__title__icon",
                    )}
                  >
                    <i className={cx("fas fa-phone-alt")}></i>
                  </label>
                  Phone
                </p>
              </div>
            </div>
            <div
              className={cx(
                "homeDefault__wrap__footer__content__contact__content__item",
              )}
            >
              <div
                className={cx(
                  "homeDefault__wrap__footer__content__contact__content__item__text",
                )}
              >
                <p
                  className={cx(
                    "homeDefault__wrap__footer__content__contact__content__item__text__title",
                  )}
                >
                  <label
                    className={cx(
                      "homeDefault__wrap__footer__content__contact__content__item__text__title__icon",
                    )}
                  >
                    <i className={cx("fas fa-envelope")}></i>
                  </label>
                  Email
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDefault;
