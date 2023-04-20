import { all, call, takeLatest, put, takeEvery } from 'redux-saga/effects';
import { getRefreshToken, login, refreshAccessToken, removeTokens, setTokens } from '../../services/AuthService';

function* loginSaga(action) {
  try {
    const { username, password } = action.payload;
    const { data } = yield call(login, username, password)
    yield put({ type: 'AUTHENTICATION_SUCCESS', payload: data})
  } catch (error) {
    yield put({ type: 'AUTHENTICATION_FAILED', payload: error })
  }
}

function* saveAuthSaga(action) {
  const { access_token, refresh_token } = action.payload;
  yield call(setTokens, access_token, refresh_token)
  yield put({ type: 'LOGIN_SUCCESS' })
}

function* refreshTokenSaga(action) {
  const { data } = yield call(refreshAccessToken, getRefreshToken())
  yield put({ type: 'AUTHENTICATION_SUCCESS', payload: data})
}

function* logoutSaga(action) {
  yield call(removeTokens)
  yield put({ type: 'LOGOUT_SUCCESS'})
}

export function* watchLogin() {
  yield takeLatest('LOGIN_REQUEST', loginSaga);
}

export function* watchLogout() {
  yield takeLatest('LOGOUT_REQUEST', logoutSaga);
}

export function* watchLoginSuccess() {
  yield takeEvery('AUTHENTICATION_SUCCESS', saveAuthSaga);
}

export function* watchRefreshToken() {
  yield takeLatest('REFRESH_TOKENS', refreshTokenSaga);
}

export default function* authSaga() {
  yield all([
    watchLogin(),
    watchLogout(),
    watchLoginSuccess(),
    watchRefreshToken()
  ])
}