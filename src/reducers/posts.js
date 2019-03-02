let data = {
  dashboard: [],
  loading: false
};

export default function posts(state = data, action) {
  switch (action.type) {
    case "DASHBOARD_DATA":
      return { ...state, dashboard: action.value };

    default:
      return state;
  }
}
