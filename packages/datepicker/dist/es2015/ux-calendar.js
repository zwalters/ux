var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, bindable, ViewResources } from 'aurelia-templating';
import { observable } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { DatetimeUtility } from './resources/datetime-utility';
import { moment } from './resources/moment-rexports';
let UxCalendar = class UxCalendar {
    constructor(resources) {
        this.resources = resources;
        this.theme = null;
        this.weekdays = moment.weekdays();
        this.calendarRows = new Array();
    }
    bind() {
        this.displayMonth = this.value.clone();
    }
    previousMonth() {
        this.displayMonth = this.displayMonth.clone().subtract(1, 'month');
    }
    nextMonth() {
        this.displayMonth = this.displayMonth.clone().add(1, 'month');
    }
    changeCalendarSelection(newDate) {
        const modifiedDate = this.value.clone()
            .set('date', newDate.date())
            .set('month', newDate.month())
            .set('year', newDate.year());
        if (this.isValidDate(modifiedDate)) {
            return;
        }
        this.value = modifiedDate;
    }
    displayMonthChanged(newDate) {
        this.calendarRows = new Array();
        const clonedDate = newDate.clone();
        const firstDay = clonedDate.startOf('month').weekday();
        const daysInMonth = newDate.daysInMonth();
        let currentWeek = new Array();
        while (currentWeek.length < firstDay) {
            currentWeek.push(null);
        }
        for (let index = 0; index < daysInMonth; index++) {
            currentWeek.push(clonedDate.clone().add(index, 'days'));
            if (currentWeek.length === 7) {
                this.calendarRows.push(currentWeek);
                currentWeek = new Array();
            }
        }
        if (currentWeek.length > 0) {
            while (currentWeek.length < 7) {
                currentWeek.push(null);
            }
            this.calendarRows.push(currentWeek);
        }
    }
    isValidDate(date) {
        return DatetimeUtility.dateOutOfRange(date, this.minDate, this.maxDate, this.config);
    }
};
__decorate([
    bindable
], UxCalendar.prototype, "theme", void 0);
__decorate([
    bindable
], UxCalendar.prototype, "weekdays", void 0);
__decorate([
    bindable
], UxCalendar.prototype, "minDate", void 0);
__decorate([
    bindable
], UxCalendar.prototype, "maxDate", void 0);
__decorate([
    bindable
], UxCalendar.prototype, "value", void 0);
__decorate([
    bindable
], UxCalendar.prototype, "config", void 0);
__decorate([
    observable
], UxCalendar.prototype, "displayMonth", void 0);
UxCalendar = __decorate([
    inject(ViewResources),
    customElement('ux-calendar')
], UxCalendar);
export { UxCalendar };
//# sourceMappingURL=ux-calendar.js.map