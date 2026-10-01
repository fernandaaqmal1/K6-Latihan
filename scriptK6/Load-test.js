import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 5 },
    { duration: '20s', target: 10 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
  // =====================
  // LOGIN
  // =====================
  const loginPayload = JSON.stringify({
    username: 'admin@techcorp.com',
    password: '*!satu2tiga!*S',
    captcha_token: '0cAFcWeA4OaXiiVwXetF-7k_yCokwBC9TFpZvTwPhAwP628_gvm4jTlXNNHrmlIWpT1Bt1sgNx_ROSZaXGmfeQk8Fp1fxxGYGB4a-r-4I7DcpHsBzjgDLMygWm6-NXJe192Fgj8J3JY2Zkjc20xcVmGgTg9_XrqpP0z-I35FA3m9aZh3wtZ7FLS2Lvm-x8Ma-UjdSLUTSduzMDsvsN05jO3rGA5o_yiWrcf4KJxxAe5TYa-_5zGKr6PTcPPPDO_22G0_6HlCKyJiHD4lg3g6rAMocuSnXHUFAvD2mYm3UIByHtveVLbzlP8tAdroi_TWvoeDUUCT_kjJIha9AE0oZM-SsT_D5kuypg5R89wCWdNq6opNlARheL1K0HawvRMAxllplHL3ZiwF0qOW7BNpaH3jwTzHtMFF0OOedcYXWPyWtmrHVIL1TP4-uxCvBNFuQ-Xc1wLTSTjIdgWeT_BeNyU1B_7Yc5qCqar_uZImKOCelVE15JqpR9L2IyQ3prSiEvw1zfo1blQFcjAsmH9uWtdW2Nu8SnCWTAN4e2XBavtLBBkrQXtYy312Qa-q383j99Z4qwUFCqid3yE0ZpCeypPcacVnHA01ZMnwMmkLIUxUGrkbXasQFF8uxzPGLrSb3nfdrf2qE3SoRZhaFHs3ik0o93dSQdbTdZgNNEnwnF4JuQAst3o_Y9QoQdyr7Nxt_Zy_BLNPQM5u7w34ENIKxhZejAHZfMOYNivDhadDWfFZbJ_w9awHj0v0aNX6dRTQWEAbqqtISrX71g6L05vI18yGjld21--2aEWvSfNCBiGfA-_yfR_AyGw2-X50gtX4YxYH8D78TicAMLRwyRE00Bxyh0RJ7nD6cqa8teC8ojbrjKp_OUPqzLDsO5qLx5eSkeKQ17wU5JjLHXCVquxSs3JubW6R4TF4cscpTs0hggI5beXC0m5bROr55zeWeK0b6ec664Gfc-ljIIgpIwkDyTkrbjTPj00eP1WLUx8oZLCOS7pnlJkoOpHzqW6-eraVQtjbqNkuFzcz3y2yXL2r0lttn1--uzIBH-yt2bEboDfNU3XOUbhjwIPTv0xu0raJkuicSgwIhkPUTb3uyYjnRJh166bomY2-i14mAZ0sypGB73PxZ0yFITg_JCtbzOf25oQfJ8iR6fT39rOOYRwhWglL4bVyUtthQWw8Hp3i3bYKQKzZthkxwzg5iAFnY1wfOHy0kF5nbN6GBZG_FhZx1_fuAiWOr4eSQtGQ6vpJDtXvcY5bHikrd0KIfE0E6PjRAsTP2z3dkwii1_JEIAKfukXkXmFu4HK9ARi5lGF5U9VH-6-cGJd3Gywym7G8cD2urWPpSpPBvbwmSjivxHVp1lJCvlV91LRsOFgWPko1NSVl2xZcwH7SCYC4dhjbIaX1ktt2jkjcjU1_aPqhpup4xkUl0yQz0iPx6oBoIPkjqErPGrIdpHAYifKXU39Whk2NvX6ujwtNeRIJgyiA4zQb9DLK112SynAKht1Al-4337eFA099YN_YCkwSvLP9kZvboQ1rlmU-WJjP4enQGUkFr9sH6ZEcpWcUnERNs2BoVORWAZViwN4wkuA9bia2HBEOvlBZcPxnpkIva6HkfZInkqla6HE4Ztjt58c5X3BUd2boPXDLiACnYxztJqTI7BtK_XTuWYS5CBPvINSRmPqJfW2FG5zzHCK6FOxu_Ow9m9B3ihQHG5WHY3-a96Yybl7FaMvbscc4xjoDasDl28N_L5sZL2d_FrjivXUV4I-LXMXd4N9JaIeqPBRxqlB-rHlVOmmhctjwkD65vO9tDvS6wQQ4ZcKpoP6rNP5dlPytDT2yFHPSfJ66vr9QNTti_EnU1uPbi-ODau0ddqxL_6htCw-wbm83ACL6LDS-H1KL9WXxjfDOk_spzsrZRCF7xSjn8zultqxCE8UMYRrGF0KPiOH1oMu8HNPdE0FeHj85kA1XWuPlIT8Wm5PHMFdTEFmXbJc2Qj8-CwRgLaJg1SgEW46NRl1GNnkGL8qSy8KRp6yLVelgp6r4P9B6fPezy7sCmN2MsKslgGlAYCVhi9XaD9vyJMV6cX_56pjzfd_2hCbj8tJ7Fib_tuSXZJWHDmCy0QvJd168RlzZe-JsMLdpdPWVPRxLGK5_J0WThjbHJQT4KULAF0Z_yXxEmjwkZ36RuxOOO65AUXr2ezq3PZtldhFZDhVaM82cO497HXwdSMNfBWSVMpYzd2PxZpv87bASqSJCGTWei9kJ7hBQHjRScab7QDJuLgk7PHQw',
  });

  const loginRes = http.post(
    'https://dev-api.personalia.arkamaya.net/login',
    loginPayload,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  check(loginRes, {
    'login success': (r) => r.status === 200,
  });

  // =====================
  // DASHBOARD
  // =====================
  const dashboardRes = http.get(
    'https://dev.personalia.arkamaya.net/personalia/dashboard'
  );

  check(dashboardRes, {
    'dashboard success': (r) => r.status === 200,
  });

  sleep(2);
}