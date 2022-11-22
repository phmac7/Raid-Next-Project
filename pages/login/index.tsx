import LogoFull from '@/components/atoms/Icons/Logo/LogoFull';
import Link from 'next/link';
import { GoogleLogo, At, LockSimple } from 'phosphor-react';
import styles from './loginPage.module.scss';
import bg from '../../public/assets/background.png';

const LoginPage = () => {
  return (
    <div
      className={styles.loginPage}
      style={{
        background: `url(${bg.src}) no-repeat center`,
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <header className={styles['loginPage__header']}>
        <LogoFull width="195" height="40" />
      </header>
      <div className={styles['loginPage__loginFormContainer']}>
        <div className={styles['loginPage__titleContainer']}>
          <h2 className={styles['loginPage__title']}>Sign In</h2>
          <span className={styles['loginPage__subtitle']}>
            Welcome back, we missed you!
          </span>
        </div>
        <form className={styles['loginPage__loginForm']} action="">
          <label className={styles['loginPage__label']} htmlFor="email">
            Email
          </label>
          <div className={styles['loginPage__inputContainer']}>
            <At size={24} className={styles['loginPage__icon']} />
            <input
              className={styles['loginPage__input']}
              type="email"
              name="email"
              id="email"
              placeholder="example@valtech.com"
            />
          </div>
          <label className={styles['loginPage__label']} htmlFor="password">
            Password
          </label>
          <div className={styles['loginPage__inputContainer']}>
            <LockSimple size={24} className={styles['loginPage__icon']} />
            <input
              className={styles['loginPage__input']}
              type="password"
              name="password"
              id="password"
              placeholder="********"
            />
          </div>
          <div className={styles['loginPage__checkboxContainer']}>
            <label
              className={styles['loginPage__checkboxLabel']}
              htmlFor="rememberMe"
            >
              <input
                className={styles['loginPage__checkbox']}
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
              />
              Remember me
            </label>
            <Link href="/">
              <a className={styles['loginPage__forgotPassword']}>
                {' '}
                Forgot password?
              </a>
            </Link>
          </div>
          <button type="submit" className={styles['loginPage__signInBtn']}>
            Sign In
          </button>
        </form>
        <span className={styles['loginPage__divider']}>OR</span>
        <button type="submit" className={styles['loginPage__googleBtn']}>
          <GoogleLogo
            weight="bold"
            size={22}
            className={styles['loginPage__googleIcon']}
          />
          Log in with Google
        </button>
        <span className={styles['loginPage__newAccount']}>
          You don`t have an account?
          <Link href={'/'}>
            <a className={styles['loginPage__signUp']}> Sign up</a>
          </Link>
        </span>
      </div>
    </div>
  );
};
export default LoginPage;
