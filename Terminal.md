[npm]: https://www.npmjs.com/ "Official site"
[git]: https://git-scm.com/ "Official site"
[npm_docs]: https://docs.npmjs.com/cli-documentation/ "Documentation"
[git_docs]: https://git-scm.com/docs "Reference"

# Terminal Command List
* [CMD](#CMD)
* [NPM](#NPM)
* [GIT](#GIT)
    * [Branch](##Branch)
    * [Push](##Push)
    * [Pull](##Push)
    * [Fork](##Push)
    * [Secure Shell](##SSH)

## CMD
```bash
cd ~  # Перейти к домашней папке
cd -  # Вернуться назад
cd .. # Перейти к родительской папке
```

```bash
pwd      # Print working directory

dir, ls  # Показать список файлов
ls -1    # Вывести список в столбец
ls -a    # Показать скрытые файлы
```

```bash
start .   # Открыть тек. папку в проводнике
more      # Вывод на экран содержимого файла
```

```bash
del, rm   # Удаление файла
ren, mv   # Переименовать файл
move, mv  # Переместить файл

mkdir, rmdir         # Создать/удалить каталог
copy, xcopy, cp      # Копировать файл
where, find, locate  # Найти файл
``` 

```bash
break               # включить/выключить обработку клавиш CTRL+C
cls, clear, reset   # Очистка экрана в командной строке 
``` 

###Check and restore:
```bash
chkdsk C: /F /R
```

```bash
sfc /scannow
DISM.exe /Online /Cleanup-image /Restorehealth   
```

###Other:

```bash
Shutdown /s /t 3600      # Завершение работы через ms
```

```bash
control userpasswords2   # Отключить пароль
```

## NPM
[npmjs.com][npm]

```bash
npm init --yes
npm -h   # Список всех доступных команд
npm -v   # Показать версию пакетного менеджера
```

```bash
npm update npm -g   # Обновить версию npm up
```

```bash
npm list --depth=0       # Список установленных пакетов
npm outdated --depth=0   # Список пакетов требующих обновления
```

```bash
npm install --global    # npm i -g
npm install --save-dev  # npm i -D
npm uninstall           # npm un
npm view 
```

```bash
npm config --global edit
npm config set init.author.name  "Joe Bloggs"
npm config set init.author.email "joebloggs@gmail.com"
npm config set init.author.url   "joebloggs.com"
npm config set init.license      "MIT"

# Установить значкние по умолчанию
echo "" > $(npm config get userconfig) 
echo "" > $(npm config get globalconfig)
```

```bash
npm cache clean
npm audit fix
```
Get more [NPM commands][npm_docs].

## GIT
[git-scm.com][git]

```bash
git init
```

```bash
git config --global user.name “Karlen” 
git config --global user.email “karlen-ll@yandex.ru”

git config --list  # Отобразить user.name и user.email
```

```bash
git cat ~/.gitconfig           # Показать файл настроек
git cat-file -p [commit hash]  # Показать коммит
```

```bash
git remote -v  # Подробное состояние удаленного репозитория
```

###Commit:

```bash
git add .                    # Включить в индексацию
git rm [file_name]           # Удалить файл
git reset HEAD [file_name]   # Убрать файл из индексации
git rm --cached [file_name]  # Убрать файл из коммита
```

```bash
git commit -m “Start”
git commit --amend -m         # Исправить сообщение коммита
git commit --amend --no-edit  # Переписать коммит
```

```bash
git status              # Отобразить статус
git show [commit hash]  # Отобразить изменения коммита
```

```bash
git diff           # Отобразить изменения
git diff --staged  # Отобразить проиндексированные изменения
```

```bash
git log                           # Отобразить коммиты
git log -1                        # Отобразить последний коммит
git log --oneline --all --graph   # Отобразить все коммиты в строку
```

###Branch:
```bash
git checkout .                                      # Откатить
git checkout [commit_hash] [file_name]
git checkout -b [branch_name] [commit_hash]         # Создать ветку
git checkout -b [branch_name] origin/[branch_name]  # Присвоить имя ветки
```

```bash
git branch --vv                                    # Детальная информация
git branch -m [new_name]                           # Переименовать тек. ветку
git branch --set-upstream-to=origin/[branch_name]  # Привязать тек. ветку
```

```bash
git merge [branch_name] -m “Слияние”  # Слияние веток
git branch -d [branch_name]           # Удалить ветоку
```

###Push:
```bash
git push origin master              # Загрузить ветку мастер
git push origin new_nname:new_name  # Отправить локальную верку в удалённую
git push origin :new_nname          # Убираем удалённую ветку

git push -u origin master           # Синхронизация 
```

###Pull:
```bash
git pull origin master  # Получить ветку master
git fetch origin        # Получить ветки 
```

###Fork:
```bash
git remote add [name] [ssh_link]  # Подключиться к репозиторию для обновления
git pull [name] master            # Обновляем ветку
```

###SSH:
```bash
ssh -T -i ~/.ssh/private_key git@github.com             # Вход

ssh-keygen -t rsa -b 4096 -C “pireverdiev@firecode.ru”  # Установить ключ
ssh-keygen -t ed25519 -C "email@example.com"
```

Config file:
```bash
Host github.com
  IdentityFile ~/ssh/private_key
```

Get more [git commands & guides][git_docs].
