"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.password = void 0;
const password = () => {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const specialCharacters = "±!@#$%^&*()_+-=§£™¡¢∞§¶•ªº–≠";
    const all = letters
        .concat(capitals)
        .concat(numbers)
        .concat(specialCharacters);
    return all;
};
exports.password = password;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2dlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBTyxNQUFNLFFBQVEsR0FBRyxHQUFXLEVBQUU7SUFDbkMsTUFBTSxPQUFPLEdBQUcsNEJBQTRCLENBQUM7SUFDN0MsTUFBTSxRQUFRLEdBQUcsNEJBQTRCLENBQUM7SUFDOUMsTUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDO0lBQzdCLE1BQU0saUJBQWlCLEdBQUcsOEJBQThCLENBQUM7SUFFekQsTUFBTSxHQUFHLEdBQUcsT0FBTztTQUNoQixNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ2hCLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDZixNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUU3QixPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQztBQVpXLFFBQUEsUUFBUSxZQVluQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwYXNzd29yZCA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGxldHRlcnMgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCI7XHJcbiAgY29uc3QgY2FwaXRhbHMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCI7XHJcbiAgY29uc3QgbnVtYmVycyA9IFwiMTIzNDU2Nzg5MFwiO1xyXG4gIGNvbnN0IHNwZWNpYWxDaGFyYWN0ZXJzID0gXCLCsSFAIyQlXiYqKClfKy09wqfCo+KEosKhwqLiiJ7Cp8K24oCiwqrCuuKAk+KJoFwiO1xyXG5cclxuICBjb25zdCBhbGwgPSBsZXR0ZXJzXHJcbiAgICAuY29uY2F0KGNhcGl0YWxzKVxyXG4gICAgLmNvbmNhdChudW1iZXJzKVxyXG4gICAgLmNvbmNhdChzcGVjaWFsQ2hhcmFjdGVycyk7XHJcblxyXG4gIHJldHVybiBhbGw7XHJcbn07XHJcbiJdfQ==