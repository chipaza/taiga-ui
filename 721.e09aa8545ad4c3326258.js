(window.webpackJsonp=window.webpackJsonp||[]).push([[721],{ITfi:function(t,n,e){"use strict";e.r(n),n.default='<form\n    class="input-wrapper"\n    [formGroup]="testForm"\n>\n    <div\n        tuiGroup\n        class="group"\n    >\n        <div>\n            <tui-input\n                formControlName="testValue"\n                tuiTextfieldExampleText="House"\n                tuiHintContent="Write a number"\n                class="tui-group__inherit-item"\n            >\n                House\n            </tui-input>\n            <tui-error\n                formControlName="testValue"\n                [error]="[] | tuiFieldError | async"\n            ></tui-error>\n        </div>\n        <div>\n            <tui-multi-select\n                formControlName="multiSelectControl"\n                tuiHintContent="Write house building"\n                class="tui-group__inherit-item"\n                [tuiTextfieldLabelOutside]="true"\n                [editable]="false"\n                [expandable]="false"\n            >\n                Building\n                <tui-data-list-wrapper\n                    *tuiDataList\n                    tuiMultiSelectGroup\n                    [items]="items"\n                ></tui-data-list-wrapper>\n            </tui-multi-select>\n            <tui-error\n                formControlName="multiSelectControl"\n                [error]="[] | tuiFieldError | async"\n            ></tui-error>\n        </div>\n        <div>\n            <tui-input\n                formControlName="testValue3"\n                tuiTextfieldExampleText="Apartment number"\n                tuiHintContent="Write an apartment number only"\n                class="tui-group__inherit-item"\n            >\n                Apartment\n            </tui-input>\n            <tui-error\n                formControlName="testValue3"\n                [error]="[] | tuiFieldError | async"\n            ></tui-error>\n        </div>\n    </div>\n</form>\n'}}]);