"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const configuration_service_1 = require("../services/configuration.service");
const database_module_1 = require("./database.module");
const log_module_1 = require("./log.module");
const setting_module_1 = require("./setting.module");
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    common_1.Module({
        components: [
            configuration_service_1.ConfigurationService,
        ],
        modules: [
            database_module_1.DatabaseModule,
            log_module_1.LogModule,
            setting_module_1.SettingModule,
        ],
    })
], CommonModule);
exports.CommonModule = CommonModule;
