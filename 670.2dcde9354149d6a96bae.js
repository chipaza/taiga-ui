(window.webpackJsonp=window.webpackJsonp||[]).push([[670],{eg3h:function(e,r,n){"use strict";n.r(r),r.default="import {fromEvent, Observable} from 'rxjs';\nimport {map, switchMap} from 'rxjs/operators';\n\nimport {ImgbbService} from './imgbb.service';\n\nexport function imageLoader(service: ImgbbService): (file: File) => Observable<string> {\n    return (file: File) => {\n        const fileReader = new FileReader();\n\n        fileReader.readAsDataURL(file);\n\n        return fromEvent(fileReader, `load`)\n            .pipe(map(() => String(fileReader.result)))\n            .pipe(switchMap(base64 => service.save(base64)));\n    };\n}\n"}}]);